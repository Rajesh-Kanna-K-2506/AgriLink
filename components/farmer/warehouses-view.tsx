"use client"

import { useState } from "react"
import {
  MapPin,
  Navigation,
  PackageOpen,
  IndianRupee,
  Percent,
  ShieldCheck,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { nearbyWarehouses, type NearbyWarehouse } from "@/lib/farmer-data"

export function WarehousesView() {
  const [selected, setSelected] = useState<string | null>(null)
  const [details, setDetails] = useState<NearbyWarehouse | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {nearbyWarehouses.map((w) => {
          const usedPct = Math.round(
            ((w.capacityTotal - w.capacityAvailable) / w.capacityTotal) * 100,
          )
          const isSelected = selected === w.id
          return (
            <Card key={w.id} className="flex flex-col">
              <CardHeader className="border-b border-border">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-base">{w.name}</CardTitle>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {w.location}
                    </p>
                  </div>
                  <Badge variant="outline" className="gap-1 shrink-0">
                    <Navigation className="h-3 w-3" />
                    {w.distanceKm} km
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 pt-5">
                <div>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <PackageOpen className="h-4 w-4" />
                      Capacity available
                    </span>
                    <span className="font-medium tabular-nums">
                      {w.capacityAvailable.toLocaleString()} kg
                    </span>
                  </div>
                  <Progress value={usedPct} className="h-2" />
                  <p className="mt-1 text-xs text-muted-foreground">{usedPct}% utilized</p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Metric icon={IndianRupee} label="Cost/kg" value={`₹${w.costPerKg}`} />
                  <Metric icon={Percent} label="Profit share" value={`${w.profitSharingPct}%`} />
                  <Metric icon={ShieldCheck} label="Insured" value={`${w.insuranceCoverage}%`} />
                </div>

                <div className="mt-auto flex gap-2 pt-2">
                  <Button variant="outline" className="flex-1" onClick={() => setDetails(w)}>
                    View Details
                  </Button>
                  <Button
                    className="flex-1 gap-1.5"
                    variant={isSelected ? "secondary" : "default"}
                    onClick={() => setSelected(w.id)}
                  >
                    {isSelected ? (
                      <>
                        <Check className="h-4 w-4" />
                        Selected
                      </>
                    ) : (
                      "Select"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Dialog open={!!details} onOpenChange={(o) => !o && setDetails(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{details?.name}</DialogTitle>
            <DialogDescription>{details?.location}</DialogDescription>
          </DialogHeader>
          {details && (
            <dl className="grid grid-cols-2 gap-4 py-2 text-sm">
              <Detail label="Distance" value={`${details.distanceKm} km`} />
              <Detail label="Capacity Available" value={`${details.capacityAvailable.toLocaleString()} kg`} />
              <Detail label="Total Capacity" value={`${details.capacityTotal.toLocaleString()} kg`} />
              <Detail label="Cost per KG" value={`₹${details.costPerKg}`} />
              <Detail label="Profit Sharing" value={`${details.profitSharingPct}%`} />
              <Detail label="Insurance Coverage" value={`${details.insuranceCoverage}%`} />
            </dl>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="rounded-lg bg-muted p-2.5 text-center">
      <Icon className="mx-auto h-4 w-4 text-primary" />
      <p className="mt-1 text-sm font-semibold tabular-nums text-foreground">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-medium text-foreground">{value}</dd>
    </div>
  )
}
