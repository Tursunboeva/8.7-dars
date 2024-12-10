"use client";

import * as React from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProducts } from "@/actions/data";
import { Product } from "@/types";

export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      setProducts(response.data.products);
    })();
  }, [favorites]);

  return (
    <div className="container px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Most popular product</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
            >
              <Card className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 z-10"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(product.id) ? "fill-primary" : ""
                    }`}
                  />
                </Button>
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src={product.images[0] || ""}
                      alt={product.name}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium line-clamp-2 min-h-[48px]">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-[#0A1729] pb-2.5 text-xl ">
                          {(product.price * 12880)
                            .toString()
                            .split("")
                            .reverse()
                            .map((char, index) =>
                              index % 3 === 0 && index !== 0 ? `${char} ` : char
                            )
                            .reverse()
                            .join("")}{" "}
                          usz
                        </p>
                        <p className="font-bold bg-[#F02C961A] px-3.5 py-1.5 rounded-md text-[#F02C96] text-sm tracking-[0.5%] ">
                          6 oy /{" "}
                          {Math.ceil((product.price * 12880) / 6)
                            .toString()
                            .split("")
                            .reverse()
                            .map((char, index) =>
                              index % 3 === 0 && index !== 0 ? `${char} ` : char
                            )
                            .reverse()
                            .join("")}{" "} usz
                        </p>
                      </div>
                      <Button
                        size="icon"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
