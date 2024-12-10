import { MapPin, Phone } from 'lucide-react'
import Link from "next/link"

export function TopBar() {
  return (
    <div className="border-b bg-secondary">
      <div className="container flex h-10 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Tashkent</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/about" className="text-sm hover:text-blue-600">
              About Us
            </Link>
            <Link href="/products" className="text-sm hover:text-blue-600">
              Products
            </Link>
            <Link href="/contacts" className="text-sm hover:text-blue-600">
              Contacts
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+998 (71) 123-45-67</span>
          </div>
        </div>
      </div>
    </div>
  )
}

