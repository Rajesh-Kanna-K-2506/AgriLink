import { DashboardShell } from "@/components/dashboard/shell"
import { StorageRequestView } from "@/components/farmer/storage-request-view"

export default function StorageRequestPage() {
  return (
    <DashboardShell
      title="Storage Requests"
      subtitle="Submit and track requests to store produce in warehouses."
    >
      <StorageRequestView />
    </DashboardShell>
  )
}
