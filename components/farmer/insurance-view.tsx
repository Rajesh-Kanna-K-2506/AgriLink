"use client"

import { useState } from "react"
import { ShieldCheck, FileText, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  insurancePolicies as seed,
  statusClasses,
  type InsurancePolicy,
} from "@/lib/farmer-data"

export function InsuranceView() {
  const [policies, setPolicies] = useState<InsurancePolicy[]>(seed)
  const [viewing, setViewing] = useState<InsurancePolicy | null>(null)
  const [claiming, setClaiming] = useState<InsurancePolicy | null>(null)

  const totalCoverage = policies.reduce((sum, p) => sum + p.coverageValue, 0)
  const activeCount = policies.filter((p) => p.status === "Active").length
  const claimsOpen = policies.filter(
    (p) => p.status === "Claim Submitted",
  ).length

  function submitClaim() {
    if (!claiming) return
    setPolicies((prev) =>
      prev.map((p) =>
        p.id === claiming.id ? { ...p, status: "Claim Submitted" } : p,
      ),
    )
    setClaiming(null)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <SummaryCard
          label="Total Coverage Value"
          value={`₹${(totalCoverage / 100000).toFixed(1)}L`}
        />
        <SummaryCard label="Active Policies" value={String(activeCount)} />
        <SummaryCard label="Open Claims" value={String(claimsOpen)} />
      </div>

      <Card>
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2 text-lg">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Insurance Policies
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Warehouse</TableHead>
                  <TableHead className="text-right">Quantity Stored</TableHead>
                  <TableHead className="text-right">Coverage %</TableHead>
                  <TableHead>Claim Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {policies.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium text-foreground">{p.product}</TableCell>
                    <TableCell className="text-muted-foreground">{p.warehouse}</TableCell>
                    <TableCell className="text-right tabular-nums">{p.quantity.toLocaleString()} kg</TableCell>
                    <TableCell className="text-right tabular-nums">{p.coveragePct}%</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={statusClasses(p.status)}>
                        {p.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setViewing(p)}>
                          <Eye className="h-3.5 w-3.5" />
                          Details
                        </Button>
                        <Button
                          size="sm"
                          className="gap-1.5"
                          disabled={p.status !== "Active"}
                          onClick={() => setClaiming(p)}
                        >
                          <FileText className="h-3.5 w-3.5" />
                          Submit Claim
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Details dialog */}
      <Dialog open={!!viewing} onOpenChange={(o) => !o && setViewing(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Insurance Details</DialogTitle>
            <DialogDescription>Policy {viewing?.id}</DialogDescription>
          </DialogHeader>
          {viewing && (
            <dl className="grid grid-cols-2 gap-4 py-2 text-sm">
              <Detail label="Product" value={viewing.product} />
              <Detail label="Warehouse" value={viewing.warehouse} />
              <Detail label="Quantity Stored" value={`${viewing.quantity.toLocaleString()} kg`} />
              <Detail label="Coverage" value={`${viewing.coveragePct}%`} />
              <Detail label="Coverage Value" value={`₹${viewing.coverageValue.toLocaleString()}`} />
              <Detail label="Status" value={viewing.status} />
            </dl>
          )}
        </DialogContent>
      </Dialog>

      {/* Claim dialog */}
      <Dialog open={!!claiming} onOpenChange={(o) => !o && setClaiming(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Insurance Claim</DialogTitle>
            <DialogDescription>
              {claiming?.product} — {claiming?.warehouse}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 py-2">
            <Label htmlFor="reason">Reason for claim</Label>
            <Textarea
              id="reason"
              placeholder="Describe the damage or loss to your stored produce..."
              rows={4}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setClaiming(null)}>
              Cancel
            </Button>
            <Button onClick={submitClaim}>Submit Claim</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-1 text-2xl font-semibold tabular-nums text-foreground">{value}</p>
      </CardContent>
    </Card>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-medium text-foreground">{value}</dd>
    </div>
  )
}
