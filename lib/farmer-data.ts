// Shared mock data for the AgriLink Farmer module

export const warehouseNames = [
  "Nashik Hub",
  "Pune Central",
  "Indore Cold",
  "Nagpur Dry",
  "Aurangabad Silo",
] as const

export const categories = [
  "Grains",
  "Pulses",
  "Vegetables",
  "Oilseeds",
  "Fruits",
] as const

export const storagePlans = ["Fixed Storage Fee", "Profit Sharing"] as const

// ---- Products ----
export type ProductStatus = "Stored" | "Pending" | "Approved" | "Dispatched"

export type Product = {
  id: string
  name: string
  category: string
  quantity: number
  warehouse: string
  plan: string
  status: ProductStatus
  harvestDate: string
}

export const products: Product[] = [
  {
    id: "PRD-1001",
    name: "Basmati Rice — Grade A",
    category: "Grains",
    quantity: 1200,
    warehouse: "Nashik Hub",
    plan: "Fixed Storage Fee",
    status: "Stored",
    harvestDate: "2026-03-12",
  },
  {
    id: "PRD-1002",
    name: "Organic Wheat",
    category: "Grains",
    quantity: 850,
    warehouse: "Pune Central",
    plan: "Profit Sharing",
    status: "Pending",
    harvestDate: "2026-04-02",
  },
  {
    id: "PRD-1003",
    name: "Yellow Maize",
    category: "Grains",
    quantity: 2000,
    warehouse: "Indore Cold",
    plan: "Fixed Storage Fee",
    status: "Approved",
    harvestDate: "2026-02-28",
  },
  {
    id: "PRD-1004",
    name: "Red Onions",
    category: "Vegetables",
    quantity: 640,
    warehouse: "Nashik Hub",
    plan: "Profit Sharing",
    status: "Dispatched",
    harvestDate: "2026-05-10",
  },
  {
    id: "PRD-1005",
    name: "Soybean",
    category: "Oilseeds",
    quantity: 1500,
    warehouse: "Nagpur Dry",
    plan: "Fixed Storage Fee",
    status: "Stored",
    harvestDate: "2026-01-22",
  },
  {
    id: "PRD-1006",
    name: "Toor Dal",
    category: "Pulses",
    quantity: 720,
    warehouse: "Aurangabad Silo",
    plan: "Profit Sharing",
    status: "Approved",
    harvestDate: "2026-03-30",
  },
  {
    id: "PRD-1007",
    name: "Alphonso Mango",
    category: "Fruits",
    quantity: 480,
    warehouse: "Nashik Hub",
    plan: "Profit Sharing",
    status: "Pending",
    harvestDate: "2026-05-18",
  },
]

// ---- Storage Requests ----
export type RequestStatus = "Pending" | "Approved" | "Rejected"

export type StorageRequestItem = {
  id: string
  product: string
  warehouse: string
  quantity: number
  plan: string
  status: RequestStatus
  date: string
}

export const requestHistory: StorageRequestItem[] = [
  {
    id: "REQ-2041",
    product: "Basmati Rice — Grade A",
    warehouse: "Nashik Hub",
    quantity: 1200,
    plan: "Fixed Storage Fee",
    status: "Approved",
    date: "2026-06-12",
  },
  {
    id: "REQ-2042",
    product: "Organic Wheat",
    warehouse: "Pune Central",
    quantity: 850,
    plan: "Profit Sharing",
    status: "Pending",
    date: "2026-06-18",
  },
  {
    id: "REQ-2043",
    product: "Yellow Maize",
    warehouse: "Indore Cold",
    quantity: 2000,
    plan: "Fixed Storage Fee",
    status: "Rejected",
    date: "2026-06-09",
  },
  {
    id: "REQ-2044",
    product: "Soybean",
    warehouse: "Nagpur Dry",
    quantity: 1500,
    plan: "Fixed Storage Fee",
    status: "Approved",
    date: "2026-06-20",
  },
  {
    id: "REQ-2045",
    product: "Toor Dal",
    warehouse: "Aurangabad Silo",
    quantity: 720,
    plan: "Profit Sharing",
    status: "Pending",
    date: "2026-06-21",
  },
]

// ---- Warehouses ----
export type NearbyWarehouse = {
  id: string
  name: string
  location: string
  distanceKm: number
  capacityAvailable: number
  capacityTotal: number
  costPerKg: number
  profitSharingPct: number
  insuranceCoverage: number
}

export const nearbyWarehouses: NearbyWarehouse[] = [
  {
    id: "WH-01",
    name: "Nashik Cold Hub",
    location: "Nashik, Maharashtra",
    distanceKm: 8.2,
    capacityAvailable: 1800,
    capacityTotal: 10000,
    costPerKg: 2.4,
    profitSharingPct: 12,
    insuranceCoverage: 90,
  },
  {
    id: "WH-02",
    name: "Pune Central Storage",
    location: "Pune, Maharashtra",
    distanceKm: 21.5,
    capacityAvailable: 3400,
    capacityTotal: 8000,
    costPerKg: 1.9,
    profitSharingPct: 15,
    insuranceCoverage: 85,
  },
  {
    id: "WH-03",
    name: "Indore Cold Chain",
    location: "Indore, Madhya Pradesh",
    distanceKm: 46.0,
    capacityAvailable: 600,
    capacityTotal: 6000,
    costPerKg: 2.1,
    profitSharingPct: 10,
    insuranceCoverage: 95,
  },
  {
    id: "WH-04",
    name: "Nagpur Dry Store",
    location: "Nagpur, Maharashtra",
    distanceKm: 63.7,
    capacityAvailable: 4900,
    capacityTotal: 7000,
    costPerKg: 1.6,
    profitSharingPct: 18,
    insuranceCoverage: 80,
  },
  {
    id: "WH-05",
    name: "Aurangabad Silo",
    location: "Aurangabad, Maharashtra",
    distanceKm: 33.4,
    capacityAvailable: 2200,
    capacityTotal: 9000,
    costPerKg: 2.0,
    profitSharingPct: 14,
    insuranceCoverage: 88,
  },
  {
    id: "WH-06",
    name: "Solapur AgriVault",
    location: "Solapur, Maharashtra",
    distanceKm: 78.1,
    capacityAvailable: 5100,
    capacityTotal: 8500,
    costPerKg: 1.7,
    profitSharingPct: 16,
    insuranceCoverage: 82,
  },
]

// ---- Insurance ----
export type ClaimStatus =
  | "Active"
  | "Claim Submitted"
  | "Claim Approved"
  | "Claim Rejected"

export type InsurancePolicy = {
  id: string
  product: string
  warehouse: string
  quantity: number
  coveragePct: number
  coverageValue: number
  status: ClaimStatus
}

export const insurancePolicies: InsurancePolicy[] = [
  {
    id: "INS-501",
    product: "Basmati Rice — Grade A",
    warehouse: "Nashik Hub",
    quantity: 1200,
    coveragePct: 90,
    coverageValue: 1080000,
    status: "Active",
  },
  {
    id: "INS-502",
    product: "Yellow Maize",
    warehouse: "Indore Cold",
    quantity: 2000,
    coveragePct: 95,
    coverageValue: 1520000,
    status: "Claim Submitted",
  },
  {
    id: "INS-503",
    product: "Soybean",
    warehouse: "Nagpur Dry",
    quantity: 1500,
    coveragePct: 80,
    coverageValue: 960000,
    status: "Claim Approved",
  },
  {
    id: "INS-504",
    product: "Toor Dal",
    warehouse: "Aurangabad Silo",
    quantity: 720,
    coveragePct: 85,
    coverageValue: 612000,
    status: "Active",
  },
  {
    id: "INS-505",
    product: "Red Onions",
    warehouse: "Nashik Hub",
    quantity: 640,
    coveragePct: 75,
    coverageValue: 288000,
    status: "Claim Rejected",
  },
]

// ---- Tracking ----
export type TrackStatus =
  | "Pending"
  | "Approved"
  | "Packed"
  | "Dispatched"
  | "In Transit"
  | "Delivered"

export const trackStages: TrackStatus[] = [
  "Pending",
  "Approved",
  "Packed",
  "Dispatched",
  "In Transit",
  "Delivered",
]

export type OrderTrack = {
  orderNo: string
  product: string
  customer: string
  quantity: number
  status: TrackStatus
}

export const orders: OrderTrack[] = [
  {
    orderNo: "ORD-7781",
    product: "Basmati Rice — Grade A",
    customer: "Sunrise Foods Pvt Ltd",
    quantity: 800,
    status: "In Transit",
  },
  {
    orderNo: "ORD-7782",
    product: "Yellow Maize",
    customer: "AgroMill Industries",
    quantity: 1500,
    status: "Delivered",
  },
  {
    orderNo: "ORD-7783",
    product: "Organic Wheat",
    customer: "Healthy Harvest Co.",
    quantity: 600,
    status: "Packed",
  },
  {
    orderNo: "ORD-7784",
    product: "Soybean",
    customer: "Nagpur Oils Ltd",
    quantity: 1200,
    status: "Approved",
  },
  {
    orderNo: "ORD-7785",
    product: "Red Onions",
    customer: "FreshMart Retail",
    quantity: 500,
    status: "Pending",
  },
  {
    orderNo: "ORD-7786",
    product: "Toor Dal",
    customer: "Spice Route Traders",
    quantity: 400,
    status: "Dispatched",
  },
]

// ---- Shared status color helper ----
export function statusClasses(status: string): string {
  switch (status) {
    case "Approved":
    case "Claim Approved":
    case "Delivered":
    case "Active":
    case "Stored":
      return "bg-primary/10 text-primary border-primary/20"
    case "Pending":
    case "Claim Submitted":
    case "Packed":
      return "bg-amber-500/10 text-amber-600 border-amber-500/20"
    case "In Transit":
    case "Dispatched":
      return "bg-sky-500/10 text-sky-600 border-sky-500/20"
    case "Rejected":
    case "Claim Rejected":
      return "bg-destructive/10 text-destructive border-destructive/20"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}
