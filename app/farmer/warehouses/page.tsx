import { DashboardShell } from "@/components/dashboard/shell"
import { WarehousesView } from "@/components/farmer/warehouses-view"

export default function WarehousesPage() {
  return (
    <DashboardShell
      title="Nearby Warehouses"
      subtitle="Compare storage options near your farm and select a partner."
    >
      <WarehousesView />
    </DashboardShell>
  )
}
