"use client"

import {
  Clock,
  CheckCircle2,
  Package,
  Send,
  Truck,
  MapPin,
  Check,
  type LucideIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  orders,
  trackStages,
  statusClasses,
  type TrackStatus,
} from "@/lib/farmer-data"

const stageIcons: Record<TrackStatus, LucideIcon> = {
  Pending: Clock,
  Approved: CheckCircle2,
  Packed: Package,
  Dispatched: Send,
  "In Transit": Truck,
  Delivered: MapPin,
}

export function TrackingView() {
  return (
    <div className="space-y-6">
      {orders.map((order) => {
        const currentIndex = trackStages.indexOf(order.status)
        return (
          <Card key={order.orderNo}>
            <CardHeader className="flex flex-col gap-4 border-b border-border lg:flex-row lg:items-center lg:justify-between">
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-4">
                <Field label="Order Number" value={order.orderNo} />
                <Field label="Product" value={order.product} />
                <Field label="Customer" value={order.customer} />
                <Field label="Quantity" value={`${order.quantity.toLocaleString()} kg`} />
              </div>
              <Badge variant="outline" className={cn("shrink-0", statusClasses(order.status))}>
                {order.status}
              </Badge>
            </CardHeader>
            <CardContent className="pt-6">
              <Timeline currentIndex={currentIndex} />
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

function Timeline({ currentIndex }: { currentIndex: number }) {
  return (
    <ol className="flex flex-col gap-0 sm:flex-row sm:items-start sm:gap-0">
      {trackStages.map((stage, i) => {
        const Icon = stageIcons[stage]
        const isDone = i < currentIndex
        const isCurrent = i === currentIndex
        const isLast = i === trackStages.length - 1
        return (
          <li
            key={stage}
            className="relative flex flex-1 items-start gap-3 sm:flex-col sm:items-center sm:text-center"
          >
            {/* Connector */}
            {!isLast && (
              <span
                className={cn(
                  "absolute left-[15px] top-8 h-[calc(100%-8px)] w-0.5 sm:left-auto sm:top-4 sm:h-0.5 sm:w-full sm:translate-x-1/2",
                  i < currentIndex ? "bg-primary" : "bg-border",
                )}
                aria-hidden
              />
            )}
            <span
              className={cn(
                "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                isDone && "border-primary bg-primary text-primary-foreground",
                isCurrent && "border-primary bg-background text-primary ring-4 ring-primary/15",
                !isDone && !isCurrent && "border-border bg-background text-muted-foreground",
              )}
            >
              {isDone ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
            </span>
            <span className="pb-6 sm:pb-0 sm:pt-2">
              <span
                className={cn(
                  "block text-sm font-medium",
                  isDone || isCurrent ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {stage}
              </span>
            </span>
          </li>
        )
      })}
    </ol>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-0.5 truncate text-sm font-medium text-foreground">{value}</p>
    </div>
  )
}
