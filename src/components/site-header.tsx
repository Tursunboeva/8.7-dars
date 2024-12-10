import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TopBar } from "@/components/top-bar";
import { MainNav } from "@/components/main-nav";
import { CartButton } from "@/components/card-button";
import { WishlistButton } from "@/components/wishlist-button";
import { UserButton } from "@/components/user-button";
import { LanguageSelector } from "@/components/language-selector";

export function SiteHeader() {
  return (
    <header className="w-full border-b">
      <TopBar />
      <div className="container px-4 py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">Ashyo</span>
          </Link>

          <Button variant="outline" className="hidden h-9 lg:flex">
            Kategoriya
          </Button>

          <div className="flex flex-1 items-center space-x-2">
            <Input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent px-4 border outline-none focus:outline-none border-gray-200"
            />
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <WishlistButton />
            <CartButton />
            <UserButton />
          </div>
        </div>
      </div>
      <MainNav />
    </header>
  );
}
