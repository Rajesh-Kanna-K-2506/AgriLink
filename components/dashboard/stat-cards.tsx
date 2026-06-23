import { TrendingUp, TrendingDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { stats } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat) => {
        const Icon = stat.icon
        const up = stat.trend >= 0
        return (
          <Card
            key={stat.label}
            className="relative overflow-hidden border-border p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <span
                className={cn(
                  "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
                  up
                    ? "bg-primary/10 text-primary"
                    : "bg-destructive/10 text-destructive",
                )}
              >
                {up ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {Math.abs(stat.trend)}%
              </span>
            </div>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-foreground/80">
              {stat.label}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">{stat.sub}</p>
          </Card>
        )
      })}
    </div>
  )
}
