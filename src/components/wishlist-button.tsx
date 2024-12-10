import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function WishlistButton() {
  return (
    <Button variant="ghost" size="icon" className="relative">
      <Heart className="h-5 w-5" />
      <Badge className="absolute -right-1 grid place-items-center -top-1 h-5 w-5 rounded-full p-0">0</Badge>
    </Button>
  )
}

