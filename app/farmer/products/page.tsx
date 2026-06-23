import { DashboardShell } from "@/components/dashboard/shell"
import { ProductsView } from "@/components/farmer/products-view"

export default function ProductsPage() {
  return (
    <DashboardShell
      title="Products"
      subtitle="Manage your stored produce across all warehouses."
    >
      <ProductsView />
    </DashboardShell>
  )
}
