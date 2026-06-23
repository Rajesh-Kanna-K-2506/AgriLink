import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { orderSummary } from "@/lib/dashboard-data"

export function OrderTracking() {
  const total = orderSummary.reduce((acc, o) => acc + o.count, 0)
  const radius = 52
  const circumference = 2 * Math.PI * radius
  let offsetAcc = 0

  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-base">Order Tracking Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
        <div className="relative h-36 w-36 shrink-0">
          <svg
            viewBox="0 0 128 128"
            className="h-full w-full -rotate-90"
            role="img"
            aria-label="Order distribution donut chart"
          >
            <circle
              cx="64"
              cy="64"
              r={radius}
              fill="none"
              stroke="var(--muted)"
              strokeWidth="12"
            />
            {orderSummary.map((o) => {
              const fraction = o.count / total
              const dash = fraction * circumference
              const seg = (
                <circle
                  key={o.label}
                  cx="64"
                  cy="64"
                  r={radius}
                  fill="none"
                  stroke={o.color}
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  strokeDashoffset={-offsetAcc}
                />
              )
              offsetAcc += dash
              return seg
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold text-foreground">
              {total}
            </span>
            <span className="text-xs text-muted-foreground">Total Orders</span>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-3 sm:flex-1">
          {orderSummary.map((o) => (
            <div key={o.label} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: o.color }}
              />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-foreground">
                  {o.count}
                </p>
                <p className="text-xs text-muted-foreground">{o.label}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
