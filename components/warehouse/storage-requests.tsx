"use client"

import { useState } from "react"
import { Check, X, Eye } from "lucide-react"
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
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { storageRequests, type RequestStatus, type StorageRequest } from "@/lib/data"

const statusStyles: Record<RequestStatus, string> = {
  pending: "bg-chart-2/15 text-chart-2 border-chart-2/30",
  approved: "bg-primary/15 text-primary border-primary/30",
  rejected: "bg-destructive/15 text-destructive border-destructive/30",
}

const planStyles = {
  Basic: "bg-muted text-muted-foreground",
  Standard: "bg-chart-3/15 text-chart-3",
  Premium: "bg-accent text-accent-foreground",
}

export function StorageRequests() {
  const [requests, setRequests] = useState<StorageRequest[]>(storageRequests)

  function setStatus(id: string, status: RequestStatus) {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Storage Request Approvals</CardTitle>
        <CardDescription>Review and act on incoming farmer storage requests.</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">Farmer Name</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Storage Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="pr-6 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((req) => (
                <TableRow key={req.id}>
                  <TableCell className="pl-6">
                    <div className="font-medium text-foreground">{req.farmer}</div>
                    <div className="text-xs text-muted-foreground">{req.id}</div>
                  </TableCell>
                  <TableCell>{req.product}</TableCell>
                  <TableCell className="font-medium">{req.quantity}</TableCell>
                  <TableCell>
                    <span className={cn("rounded-md px-2 py-1 text-xs font-medium", planStyles[req.plan])}>
                      {req.plan}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={cn("capitalize", statusStyles[req.status])}>
                      {req.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="pr-6">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="size-8 text-primary hover:bg-primary/10 disabled:opacity-40"
                        aria-label={`Approve request from ${req.farmer}`}
                        disabled={req.status === "approved"}
                        onClick={() => setStatus(req.id, "approved")}
                      >
                        <Check className="size-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="size-8 text-destructive hover:bg-destructive/10 disabled:opacity-40"
                        aria-label={`Reject request from ${req.farmer}`}
                        disabled={req.status === "rejected"}
                        onClick={() => setStatus(req.id, "rejected")}
                      >
                        <X className="size-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="size-8 text-muted-foreground hover:bg-muted"
                        aria-label={`View request from ${req.farmer}`}
                      >
                        <Eye className="size-4" />
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
  )
}
