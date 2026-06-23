"use client"

import { Bell, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Topbar({
  onMenuClick,
  title = "Welcome back, Rohan",
  subtitle = "Here's what's happening across your supply chain today.",
  action,
}: {
  onMenuClick: () => void
  title?: string
  subtitle?: string
  action?: React.ReactNode
}) {
  return (
    <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md md:px-8">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="hidden min-w-0 flex-col md:flex">
        <h1 className="truncate text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="truncate text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div className="ml-auto flex items-center gap-2 md:gap-3">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search products, requests..."
            className="h-10 w-44 rounded-lg border border-input bg-card pl-9 pr-3 text-sm text-foreground outline-none transition-[width,box-shadow] focus:w-64 focus:ring-2 focus:ring-ring/40"
          />
        </div>

        {action}

        <Button
          variant="outline"
          size="icon"
          className="relative bg-card"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
        </Button>

        <Avatar className="h-10 w-10 border border-border">
          <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
            RK
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
