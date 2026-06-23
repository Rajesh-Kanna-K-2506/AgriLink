"use client"

import { useMemo, useState } from "react"
import { Plus, Search, Eye, Pencil, Trash2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  products as seed,
  categories,
  warehouseNames,
  storagePlans,
  statusClasses,
  type Product,
} from "@/lib/farmer-data"

export function ProductsView() {
  const [items, setItems] = useState<Product[]>(seed)
  const [query, setQuery] = useState("")
  const [addOpen, setAddOpen] = useState(false)
  const [viewing, setViewing] = useState<Product | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.warehouse.toLowerCase().includes(q),
    )
  }, [items, query])

  function handleAdd(form: FormData) {
    const newProduct: Product = {
      id: `PRD-${1008 + items.length}`,
      name: String(form.get("name") || "Untitled Product"),
      category: String(form.get("category") || "Grains"),
      quantity: Number(form.get("quantity") || 0),
      warehouse: String(form.get("warehouse") || warehouseNames[0]),
      plan: String(form.get("plan") || storagePlans[0]),
      status: "Pending",
      harvestDate: String(form.get("harvestDate") || "2026-06-01"),
    }
    setItems((prev) => [newProduct, ...prev])
    setAddOpen(false)
  }

  function handleDelete(id: string) {
    setItems((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <Card>
      <CardHeader className="flex flex-col gap-4 border-b border-border sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle className="text-lg">My Products</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">
            {filtered.length} of {items.length} products
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 sm:w-64"
            />
          </div>
          <Dialog open={addOpen} onOpenChange={setAddOpen}>
           
             <Button
  className="gap-2"
  onClick={() => setAddOpen(true)}
>
  <Plus className="h-4 w-4" />
  Add Product
</Button>
          
            <DialogContent>
              <form action={handleAdd}>
                <DialogHeader>
                  <DialogTitle>Add Product</DialogTitle>
                  <DialogDescription>
                    Register a new batch of produce for storage.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input id="name" name="name" placeholder="e.g. Basmati Rice — Grade A" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="category">Category</Label>
                      <Select name="category" defaultValue={categories[0]}>
                        <SelectTrigger id="category">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="quantity">Quantity (KG)</Label>
                      <Input id="quantity" name="quantity" type="number" min="0" placeholder="1000" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="warehouse">Warehouse</Label>
                      <Select name="warehouse" defaultValue={warehouseNames[0]}>
                        <SelectTrigger id="warehouse">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {warehouseNames.map((w) => (
                            <SelectItem key={w} value={w}>
                              {w}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="harvestDate">Harvest Date</Label>
                      <Input id="harvestDate" name="harvestDate" type="date" defaultValue="2026-06-01" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="plan">Storage Plan</Label>
                    <Select name="plan" defaultValue={storagePlans[0]}>
                      <SelectTrigger id="plan">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {storagePlans.map((p) => (
                          <SelectItem key={p} value={p}>
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Product</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Quantity (KG)</TableHead>
                <TableHead>Warehouse</TableHead>
                <TableHead>Storage Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Harvest Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium text-foreground">{p.name}</TableCell>
                  <TableCell className="text-muted-foreground">{p.category}</TableCell>
                  <TableCell className="text-right tabular-nums">{p.quantity.toLocaleString()}</TableCell>
                  <TableCell className="text-muted-foreground">{p.warehouse}</TableCell>
                  <TableCell className="text-muted-foreground">{p.plan}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusClasses(p.status)}>
                      {p.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground tabular-nums">{p.harvestDate}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      
                        <Button variant="ghost" size="icon" aria-label="Actions">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setViewing(p)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setViewing(p)}>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                          onClick={() => handleDelete(p.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="py-10 text-center text-muted-foreground">
                    No products match your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* View dialog */}
      <Dialog open={!!viewing} onOpenChange={(o) => !o && setViewing(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{viewing?.name}</DialogTitle>
            <DialogDescription>Product ID: {viewing?.id}</DialogDescription>
          </DialogHeader>
          {viewing && (
            <dl className="grid grid-cols-2 gap-4 py-2 text-sm">
              <Detail label="Category" value={viewing.category} />
              <Detail label="Quantity" value={`${viewing.quantity.toLocaleString()} kg`} />
              <Detail label="Warehouse" value={viewing.warehouse} />
              <Detail label="Storage Plan" value={viewing.plan} />
              <Detail label="Status" value={viewing.status} />
              <Detail label="Harvest Date" value={viewing.harvestDate} />
            </dl>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-medium text-foreground">{value}</dd>
    </div>
  )
}
