import { MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { warehouses } from "@/lib/dashboard-data"

export function WarehouseUtilization() {
  return (
    <Card className="border-border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">Warehouse Utilization</CardTitle>
        <button className="text-sm font-medium text-primary hover:underline">
          Manage
        </button>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {warehouses.map((w) => {
          const pct = Math.round((w.used / w.capacity) * 100)
          return (
            <div
              key={w.name}
              className="rounded-xl border border-border bg-muted/30 p-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {w.name}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {w.location}
                  </p>
                </div>
                <span className="text-sm font-semibold text-foreground">
                  {pct}%
                </span>
              </div>
              <Progress value={pct} className="mt-3 h-2" />
              <p className="mt-2 text-xs text-muted-foreground">
                {w.used.toLocaleString()} / {w.capacity.toLocaleString()} units
              </p>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
