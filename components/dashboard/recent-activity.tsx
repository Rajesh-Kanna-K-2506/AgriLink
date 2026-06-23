import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { activities } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

const statusStyles: Record<string, string> = {
  Approved: "bg-primary/10 text-primary border-primary/20",
  Pending: "bg-amber-100 text-amber-700 border-amber-200",
  "In Transit": "bg-sky-100 text-sky-700 border-sky-200",
  Stored: "bg-secondary text-secondary-foreground border-border",
}

export function RecentActivity() {
  return (
    <Card className="border-border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">Recent Product Activity</CardTitle>
        <button className="text-sm font-medium text-primary hover:underline">
          View all
        </button>
      </CardHeader>
      <CardContent className="space-y-1">
        {activities.map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-lg px-2 py-3 transition-colors hover:bg-muted/60"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
              {a.product.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">
                {a.product}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {a.action} &middot; {a.quantity}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <Badge
                variant="outline"
                className={cn("font-medium", statusStyles[a.status])}
              >
                {a.status}
              </Badge>
              <span className="text-xs text-muted-foreground">{a.time}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
