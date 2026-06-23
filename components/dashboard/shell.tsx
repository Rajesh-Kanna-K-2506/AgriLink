"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Topbar } from "@/components/dashboard/topbar"

export function DashboardShell({
  children,
  title,
  subtitle,
  action,
}: {
  children: React.ReactNode
  title?: string
  subtitle?: string
  action?: React.ReactNode
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 lg:block">
        <Sidebar />
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-y-0 left-0 w-64 shadow-xl">
            <button
              className="absolute right-3 top-4 z-10 text-sidebar-foreground/70 hover:text-sidebar-foreground"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <div className="lg:pl-64">
        <Topbar
          onMenuClick={() => setMobileOpen(true)}
          title={title}
          subtitle={subtitle}
          action={action}
        />

        <main className="mx-auto max-w-7xl space-y-6 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
