import {
  Warehouse,
  Package,
  Users,
  ClipboardList,
  DollarSign,
  TrendingUp,
  TrendingDown,
  type LucideIcon,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { stats } from "@/lib/data"

const iconMap: Record<string, LucideIcon> = {
  warehouse: Warehouse,
  package: Package,
  users: Users,
  clipboard: ClipboardList,
  dollar: DollarSign,
}

export function StatCards() {
  return (
    <section
      aria-label="Key metrics"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    >
      {stats.map((stat) => {
        const Icon = iconMap[stat.icon]
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown
        return (
          <Card key={stat.label} className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </div>
              <span
                className={cn(
                  "flex items-center gap-1 text-xs font-medium",
                  stat.trend === "up" ? "text-primary" : "text-destructive",
                )}
              >
                <TrendIcon className="size-3.5" />
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold tracking-tight text-foreground">
                {stat.value}
                {stat.unit ? (
                  <span className="ml-1 text-sm font-normal text-muted-foreground">{stat.unit}</span>
                ) : null}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </Card>
        )
      })}
    </section>
  )
}
