"use client";

import Link from "next/link";
import { Coffee, MapPin, MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex mx-auto h-16 items-center justify-between px-5 w-full">
        <Link href="/" className="flex items-center space-x-2">
          <Coffee className="h-6 w-6" />
          <span className="text-xl font-bold">Villa Qalby Qu</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link
            href="https://maps.app.goo.gl/b7VrYBZDnHwpYCtq6"
            target="_blank"
            className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <MapPin className="h-4 w-4" />
            <span>Lokasi</span>
          </Link>
          <Link
            href="https://wa.me/6281805277709"
            target="_blank"
            className="flex items-center space-x-2 text-sm font-medium text-green-600 transition-colors hover:text-green-700"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            {/* Add SheetTitle for accessibility */}
            <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
            <div className="flex flex-col space-y-4 mt-4">
              <Link
                href="https://maps.app.goo.gl/b7VrYBZDnHwpYCtq6"
                target="_blank"
                className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <MapPin className="h-4 w-4" />
                <span>Lokasi</span>
              </Link>
              <Link
                href="https://wa.me/6281805277709"
                target="_blank"
                className="flex items-center space-x-2 text-sm font-medium text-green-600 transition-colors hover:text-green-700"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
