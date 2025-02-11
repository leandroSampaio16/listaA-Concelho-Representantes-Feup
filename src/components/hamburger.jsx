'use client'

import { useState } from 'react'
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[200px] sm:w-[300px]">
        <nav className="flex flex-col space-y-4 mt-8">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>Home</Button>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>About</Button>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>Contact</Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default HamburgerMenu
