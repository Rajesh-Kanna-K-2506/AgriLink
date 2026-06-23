import { Clock, CheckCircle2, PackageCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { orders, type OrderStage } from "@/lib/data"

const columns: { stage: OrderStage; title: string; icon: typeof Clock; accent: string }[] = [
  { stage: "pending", title: "Pending Orders", icon: Clock, accent: "text-chart-2" },
  { stage: "approved", title: "Approved Orders", icon: CheckCircle2, accent: "text-chart-3" },
  { stage: "packed", title: "Packed Orders", icon: PackageCheck, accent: "text-primary" },
]

export function OrderProcessing() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Processing</CardTitle>
        <CardDescription>Track orders as they move through the fulfillment pipeline.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {columns.map((col) => {
            const items = orders.filter((o) => o.stage === col.stage)
            return (
              <div key={col.stage} className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <col.icon className={cn("size-4", col.accent)} />
                    <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
                  </div>
                  <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-card px-1.5 text-xs font-semibold text-muted-foreground">
                    {items.length}
                  </span>
                </div>
                <div className="space-y-2">
                  {items.map((order) => (
                    <div key={order.id} className="rounded-lg border border-border bg-card p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{order.customer}</span>
                        <span className="text-xs text-muted-foreground">{order.id}</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                        <span>{order.product}</span>
                        <span className="font-medium text-foreground">{order.quantity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
