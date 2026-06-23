import { DashboardShell } from "@/components/dashboard/shell"
import { InsuranceView } from "@/components/farmer/insurance-view"

export default function InsurancePage() {
  return (
    <DashboardShell
      title="Insurance"
      subtitle="Track coverage on your stored produce and manage claims."
    >
      <InsuranceView />
    </DashboardShell>
  )
}
