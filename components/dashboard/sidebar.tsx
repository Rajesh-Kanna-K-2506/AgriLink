"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  Warehouse,
  Building2,
  ShieldCheck,
  Truck,
  Sprout,
  LogOut,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Package,
  Warehouse,
  Building2,
  ShieldCheck,
  Truck,
}

const items = [
  { label: "Dashboard", icon: "LayoutDashboard", href: "/" },
  { label: "Products", icon: "Package", href: "/farmer/products" },
  { label: "Storage Requests", icon: "Warehouse", href: "/farmer/storage-request" },
  { label: "Warehouses", icon: "Building2", href: "/farmer/warehouses" },
  { label: "Insurance", icon: "ShieldCheck", href: "/farmer/insurance" },
  { label: "Tracking", icon: "Truck", href: "/farmer/tracking" },
]

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
          <Sprout className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <p className="text-base font-semibold tracking-tight">AgriLink</p>
          <p className="text-xs text-sidebar-foreground/60">Supply Chain</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-2">
        <p className="px-3 pb-2 pt-3 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/40">
          Menu
        </p>
        {items.map((item) => {
          const Icon = iconMap[item.icon]
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href)
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => onNavigate?.()}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                  : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="h-[18px] w-[18px] shrink-0" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="m-3 rounded-xl bg-sidebar-accent p-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <ShieldCheck className="h-4 w-4 text-sidebar-primary" />
          Insurance active
        </div>
        <p className="mt-1 text-xs text-sidebar-foreground/60">
          Your stored produce is covered up to ₹42.6L.
        </p>
      </div>

      <button className="m-3 mt-0 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
        <LogOut className="h-[18px] w-[18px]" />
        Sign out
      </button>
    </div>
  )
}
