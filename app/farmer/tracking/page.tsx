import { DashboardShell } from "@/components/dashboard/shell"
import { TrackingView } from "@/components/farmer/tracking-view"

export default function TrackingPage() {
  return (
    <DashboardShell
      title="Order Tracking"
      subtitle="Follow each order from approval to delivery."
    >
      <TrackingView />
    </DashboardShell>
  )
}
