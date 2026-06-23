import { DashboardShell } from "@/components/dashboard/shell"
import { StatCards } from "@/components/dashboard/stat-cards"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { StorageStatus } from "@/components/dashboard/storage-status"
import { OrderTracking } from "@/components/dashboard/order-tracking"
import { WarehouseUtilization } from "@/components/dashboard/warehouse-utilization"

export default function Page() {
  return (
    <DashboardShell>
      <StatCards />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentActivity />
        </div>
        <div>
          <StorageStatus />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div>
          <OrderTracking />
        </div>
        <div className="xl:col-span-2">
          <WarehouseUtilization />
        </div>
      </div>
    </DashboardShell>
  )
}
