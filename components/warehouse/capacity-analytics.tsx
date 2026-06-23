import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { capacity } from "@/lib/data"

function formatKg(n: number) {
  return `${n.toLocaleString("en-US")} KG`
}

export function CapacityAnalytics() {
  const occupancy = Math.round((capacity.used / capacity.total) * 100)

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Warehouse Capacity</CardTitle>
        <CardDescription>Live occupancy across all storage units.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6">
        <div className="relative flex size-44 items-center justify-center">
          <div
            className="size-44 rounded-full"
            style={{
              background: `conic-gradient(var(--primary) ${occupancy * 3.6}deg, var(--muted) 0deg)`,
            }}
            role="img"
            aria-label={`Occupancy ${occupancy} percent`}
          />
          <div className="absolute flex size-32 flex-col items-center justify-center rounded-full bg-card">
            <span className="text-3xl font-semibold text-foreground">{occupancy}%</span>
            <span className="text-xs text-muted-foreground">Occupancy</span>
          </div>
        </div>

        <div className="w-full space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Capacity Used</span>
            </div>
            <span className="text-sm font-semibold text-foreground">{formatKg(capacity.used)}</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-muted-foreground/40" />
              <span className="text-sm text-muted-foreground">Available Capacity</span>
            </div>
            <span className="text-sm font-semibold text-foreground">{formatKg(capacity.available)}</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3">
            <span className="text-sm text-muted-foreground">Total Capacity</span>
            <span className="text-sm font-semibold text-foreground">{formatKg(capacity.total)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
