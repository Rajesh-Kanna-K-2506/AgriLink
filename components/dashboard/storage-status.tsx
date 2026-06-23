import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { storageRequests } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

const statusStyles: Record<string, string> = {
  Approved: "bg-primary/10 text-primary border-primary/20",
  Review: "bg-sky-100 text-sky-700 border-sky-200",
  Pending: "bg-amber-100 text-amber-700 border-amber-200",
}

export function StorageStatus() {
  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-base">Storage Requests Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {storageRequests.map((req) => (
          <div key={req.id} className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">
                  {req.crop}
                </p>
                <p className="text-xs text-muted-foreground">
                  {req.id} &middot; {req.warehouse}
                </p>
              </div>
              <Badge
                variant="outline"
                className={cn("font-medium", statusStyles[req.status])}
              >
                {req.status}
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <Progress value={req.progress} className="h-2" />
              <span className="w-9 shrink-0 text-right text-xs font-medium text-muted-foreground">
                {req.progress}%
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
