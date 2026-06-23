import {
  Card,
  CardContent,
  CardDescription,
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
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { inventory } from "@/lib/data"

function insuranceColor(value: number) {
  if (value >= 90) return "text-primary"
  if (value >= 70) return "text-chart-2"
  return "text-destructive"
}

export function InventoryTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Overview</CardTitle>
        <CardDescription>Stored produce, remaining quantities and insurance coverage.</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">Product Name</TableHead>
                <TableHead>Farmer</TableHead>
                <TableHead>Quantity Stored</TableHead>
                <TableHead>Remaining</TableHead>
                <TableHead className="pr-6">Insurance Coverage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="pl-6">
                    <div className="font-medium text-foreground">{item.product}</div>
                    <div className="text-xs text-muted-foreground">{item.id}</div>
                  </TableCell>
                  <TableCell>{item.farmer}</TableCell>
                  <TableCell className="font-medium">{item.stored}</TableCell>
                  <TableCell>{item.remaining}</TableCell>
                  <TableCell className="pr-6">
                    <div className="flex items-center gap-3">
                      <Progress value={item.insurance} className="h-2 w-24" />
                      <span className={cn("text-sm font-semibold", insuranceColor(item.insurance))}>
                        {item.insurance}%
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
