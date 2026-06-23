export type RequestStatus = "pending" | "approved" | "rejected"

export type StorageRequest = {
  id: string
  farmer: string
  product: string
  quantity: string
  plan: "Basic" | "Standard" | "Premium"
  status: RequestStatus
}

export type InventoryItem = {
  id: string
  product: string
  farmer: string
  stored: string
  remaining: string
  insurance: number
}

export type OrderStage = "pending" | "approved" | "packed"

export type Order = {
  id: string
  customer: string
  product: string
  quantity: string
  stage: OrderStage
}

export const stats = [
  {
    label: "Total Inventory",
    value: "482,500",
    unit: "KG",
    change: "+8.2%",
    trend: "up" as const,
    icon: "warehouse" as const,
  },
  {
    label: "Available Capacity",
    value: "117,500",
    unit: "KG",
    change: "-4.1%",
    trend: "down" as const,
    icon: "package" as const,
  },
  {
    label: "Active Farmers",
    value: "1,284",
    unit: "",
    change: "+12.6%",
    trend: "up" as const,
    icon: "users" as const,
  },
  {
    label: "Pending Requests",
    value: "37",
    unit: "",
    change: "+5",
    trend: "up" as const,
    icon: "clipboard" as const,
  },
  {
    label: "Revenue Generated",
    value: "$248,900",
    unit: "",
    change: "+18.4%",
    trend: "up" as const,
    icon: "dollar" as const,
  },
]

export const storageRequests: StorageRequest[] = [
  { id: "REQ-1042", farmer: "Amina Okonkwo", product: "Maize", quantity: "12,000 KG", plan: "Premium", status: "pending" },
  { id: "REQ-1041", farmer: "Joseph Mwangi", product: "Rice", quantity: "8,500 KG", plan: "Standard", status: "pending" },
  { id: "REQ-1040", farmer: "Fatima Bello", product: "Soybeans", quantity: "5,200 KG", plan: "Basic", status: "pending" },
  { id: "REQ-1039", farmer: "David Adeyemi", product: "Wheat", quantity: "15,000 KG", plan: "Premium", status: "approved" },
  { id: "REQ-1038", farmer: "Grace Njoroge", product: "Cassava", quantity: "9,800 KG", plan: "Standard", status: "pending" },
  { id: "REQ-1037", farmer: "Samuel Otieno", product: "Sorghum", quantity: "3,400 KG", plan: "Basic", status: "rejected" },
]

export const inventory: InventoryItem[] = [
  { id: "INV-501", product: "Maize", farmer: "Amina Okonkwo", stored: "12,000 KG", remaining: "9,400 KG", insurance: 95 },
  { id: "INV-502", product: "Rice", farmer: "Joseph Mwangi", stored: "8,500 KG", remaining: "6,200 KG", insurance: 80 },
  { id: "INV-503", product: "Wheat", farmer: "David Adeyemi", stored: "15,000 KG", remaining: "14,100 KG", insurance: 100 },
  { id: "INV-504", product: "Soybeans", farmer: "Fatima Bello", stored: "5,200 KG", remaining: "2,800 KG", insurance: 65 },
  { id: "INV-505", product: "Cassava", farmer: "Grace Njoroge", stored: "9,800 KG", remaining: "7,500 KG", insurance: 88 },
]

export const orders: Order[] = [
  { id: "ORD-2201", customer: "FreshMart Foods", product: "Maize", quantity: "2,000 KG", stage: "pending" },
  { id: "ORD-2202", customer: "GreenBasket Co.", product: "Rice", quantity: "1,200 KG", stage: "pending" },
  { id: "ORD-2203", customer: "Sahel Distributors", product: "Wheat", quantity: "3,500 KG", stage: "approved" },
  { id: "ORD-2204", customer: "Nile Grains Ltd.", product: "Soybeans", quantity: "800 KG", stage: "approved" },
  { id: "ORD-2205", customer: "Harvest Hub", product: "Cassava", quantity: "1,600 KG", stage: "packed" },
  { id: "ORD-2206", customer: "AgroPrime", product: "Sorghum", quantity: "950 KG", stage: "packed" },
]

export const capacity = {
  total: 600000,
  used: 482500,
  available: 117500,
}
