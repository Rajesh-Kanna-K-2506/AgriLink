"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/warehouse/dashboard-sidebar"
import { DashboardHeader } from "@/components/warehouse/dashboard-header"
import { StatCards } from "@/components/warehouse/stat-cards"
import { StorageRequests } from "@/components/warehouse/storage-requests"
import { InventoryTable } from "@/components/warehouse/inventory-table"
import { CapacityAnalytics } from "@/components/warehouse/capacity-analytics"
import { OrderProcessing } from "@/components/warehouse/order-processing"

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar open={sidebarOpen} />

      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-30 bg-foreground/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="lg:pl-64">
        <DashboardHeader onMenuClick={() => setSidebarOpen((v) => !v)} />

        <main className="mx-auto max-w-[1600px] space-y-6 p-4 md:p-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
              Warehouse Overview
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Monitor storage, inventory and fulfillment across the AgriLink network.
            </p>
          </div>

          <StatCards />

          <StorageRequests />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <InventoryTable />
            </div>
            <div>
              <CapacityAnalytics />
            </div>
          </div>

          <OrderProcessing />
        </main>
      </div>
    </div>
  )
}
