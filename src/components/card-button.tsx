import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CartButton() {
  return (
    <Button variant="ghost" size="icon" className="relative">
      <ShoppingCart className="h-5 w-5" />
      <Badge className="absolute grid place-items-center -right-1 -top-1 h-5 w-5 rounded-full p-0">2</Badge>
    </Button>
  )
}

