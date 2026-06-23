import {
  Package,
  Warehouse,
  CheckCircle2,
  Clock,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"

export type Stat = {
  label: string
  value: string
  sub: string
  trend: number
  icon: LucideIcon
}

export const stats: Stat[] = [
  {
    label: "Total Products Stored",
    value: "12,480",
    sub: "units across 6 warehouses",
    trend: 8.2,
    icon: Package,
  },
  {
    label: "Active Storage Requests",
    value: "34",
    sub: "awaiting allocation",
    trend: 3.1,
    icon: Warehouse,
  },
  {
    label: "Approved Products",
    value: "9,210",
    sub: "verified & graded",
    trend: 5.6,
    icon: CheckCircle2,
  },
  {
    label: "Pending Orders",
    value: "18",
    sub: "ready to dispatch",
    trend: -2.4,
    icon: Clock,
  },
  {
    label: "Insurance Coverage",
    value: "₹42.6L",
    sub: "active policies",
    trend: 1.8,
    icon: ShieldCheck,
  },
]

export type Activity = {
  product: string
  action: string
  quantity: string
  status: "Approved" | "Pending" | "In Transit" | "Stored"
  time: string
}

export const activities: Activity[] = [
  {
    product: "Basmati Rice — Grade A",
    action: "Storage approved",
    quantity: "1,200 kg",
    status: "Approved",
    time: "12 min ago",
  },
  {
    product: "Organic Wheat",
    action: "New storage request",
    quantity: "850 kg",
    status: "Pending",
    time: "1 hr ago",
  },
  {
    product: "Yellow Maize",
    action: "Dispatched to buyer",
    quantity: "2,000 kg",
    status: "In Transit",
    time: "3 hrs ago",
  },
  {
    product: "Red Onions",
    action: "Added to cold storage",
    quantity: "640 kg",
    status: "Stored",
    time: "5 hrs ago",
  },
  {
    product: "Soybean",
    action: "Quality inspection passed",
    quantity: "1,500 kg",
    status: "Approved",
    time: "Yesterday",
  },
]

export type StorageRequest = {
  id: string
  crop: string
  warehouse: string
  progress: number
  status: "Approved" | "Pending" | "Review"
}

export const storageRequests: StorageRequest[] = [
  { id: "REQ-2041", crop: "Basmati Rice", warehouse: "Nashik Hub", progress: 100, status: "Approved" },
  { id: "REQ-2042", crop: "Organic Wheat", warehouse: "Pune Central", progress: 45, status: "Review" },
  { id: "REQ-2043", crop: "Yellow Maize", warehouse: "Indore Cold", progress: 20, status: "Pending" },
  { id: "REQ-2044", crop: "Soybean", warehouse: "Nagpur Dry", progress: 80, status: "Review" },
]

export type Order = {
  label: string
  count: number
  total: number
  color: string
}

export const orderSummary: Order[] = [
  { label: "Delivered", count: 142, total: 200, color: "var(--chart-1)" },
  { label: "In Transit", count: 38, total: 200, color: "var(--chart-2)" },
  { label: "Processing", count: 14, total: 200, color: "var(--chart-3)" },
  { label: "Delayed", count: 6, total: 200, color: "var(--chart-4)" },
]

export type WarehouseUsage = {
  name: string
  location: string
  used: number
  capacity: number
}

export const warehouses: WarehouseUsage[] = [
  { name: "Nashik Hub", location: "Maharashtra", used: 8200, capacity: 10000 },
  { name: "Pune Central", location: "Maharashtra", used: 4600, capacity: 8000 },
  { name: "Indore Cold", location: "Madhya Pradesh", used: 5400, capacity: 6000 },
  { name: "Nagpur Dry", location: "Maharashtra", used: 2100, capacity: 7000 },
]

export const navItems = [
  { label: "Dashboard", icon: "LayoutDashboard", active: true },
  { label: "Products", icon: "Package" },
  { label: "Storage Requests", icon: "Warehouse" },
  { label: "Warehouses", icon: "Building2" },
  { label: "Insurance", icon: "ShieldCheck" },
  { label: "Tracking", icon: "Truck" },
] as const
