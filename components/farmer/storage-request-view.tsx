"use client"

import { useState } from "react"
import { Send, Coins, PiggyBank } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  warehouseNames,
  products,
  storagePlans,
  requestHistory as seed,
  statusClasses,
  type StorageRequestItem,
} from "@/lib/farmer-data"

export function StorageRequestView() {
  const [history, setHistory] = useState<StorageRequestItem[]>(seed)
  const [plan, setPlan] = useState<string>(storagePlans[0])

  function handleSubmit(form: FormData) {
    const item: StorageRequestItem = {
      id: `REQ-${2046 + history.length}`,
      product: String(form.get("product") || products[0].name),
      warehouse: String(form.get("warehouse") || warehouseNames[0]),
      quantity: Number(form.get("quantity") || 0),
      plan,
      status: "Pending",
      date: new Date().toISOString().slice(0, 10),
    }
    setHistory((prev) => [item, ...prev])
  }

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      <Card className="xl:col-span-1">
        <CardHeader>
          <CardTitle className="text-lg">New Storage Request</CardTitle>
          <CardDescription>Request space for your produce.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="warehouse">Warehouse Selection</Label>
              <Select name="warehouse" defaultValue={warehouseNames[0]}>
                <SelectTrigger id="warehouse">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {warehouseNames.map((w) => (
                    <SelectItem key={w} value={w}>
                      {w}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="product">Product Selection</Label>
              <Select name="product" defaultValue={products[0].name}>
                <SelectTrigger id="product">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {products.map((p) => (
                    <SelectItem key={p.id} value={p.name}>
                      {p.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="quantity">Quantity (KG)</Label>
              <Input id="quantity" name="quantity" type="number" min="0" placeholder="1000" required />
            </div>

            <div className="grid gap-2">
              <Label>Storage Plan</Label>
              <div className="grid grid-cols-1 gap-2">
                <PlanOption
                  icon={Coins}
                  title="Fixed Storage Fee"
                  desc="Pay a flat rate per KG, keep all sale profits."
                  selected={plan === "Fixed Storage Fee"}
                  onSelect={() => setPlan("Fixed Storage Fee")}
                />
                <PlanOption
                  icon={PiggyBank}
                  title="Profit Sharing"
                  desc="No upfront fee, share a % of final sale profit."
                  selected={plan === "Profit Sharing"}
                  onSelect={() => setPlan("Profit Sharing")}
                />
              </div>
            </div>

            <Button type="submit" className="w-full gap-2">
              <Send className="h-4 w-4" />
              Submit Request
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="xl:col-span-2">
        <CardHeader className="border-b border-border">
          <CardTitle className="text-lg">Request History</CardTitle>
          <CardDescription>{history.length} total requests</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Warehouse</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {history.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium text-foreground">{r.id}</TableCell>
                    <TableCell>{r.product}</TableCell>
                    <TableCell className="text-muted-foreground">{r.warehouse}</TableCell>
                    <TableCell className="text-right tabular-nums">{r.quantity.toLocaleString()}</TableCell>
                    <TableCell className="text-muted-foreground">{r.plan}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={statusClasses(r.status)}>
                        {r.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground tabular-nums">{r.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function PlanOption({
  icon: Icon,
  title,
  desc,
  selected,
  onSelect,
}: {
  icon: React.ElementType
  title: string
  desc: string
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex items-start gap-3 rounded-lg border p-3 text-left transition-colors",
        selected
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/40 hover:bg-muted",
      )}
    >
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-md",
          selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
        )}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </button>
  )
}
