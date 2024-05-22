"use client"
import { cn } from "@/utils/cn";
import { Menu, MenuItem, HoveredLink, ProductItem } from "./ui/navbar-menu"
import React, { useState } from "react"
import Image from "next/image";
import njpw_logo from "../public/njpw_logo.png";

const NavMenu = ({className}:{className?: string}) =>{

  const [active, setActive] = useState<string | null>(null);
  return (
   <>
      <div className="fixed inset-0 justify-start">
        <Image src={njpw_logo} alt="logo"/>
      </div>
      <div className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 ", className)}>
      <Menu setActive={setActive}>
        <MenuItem item="Home" active={active} setActive={setActive}>
            <HoveredLink href="/">Go back to the main page</HoveredLink>
          </MenuItem>
        <MenuItem item="Roster" active={active} setActive={setActive}>
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/roster">Roster</HoveredLink>
          <HoveredLink href="/roster">Factions</HoveredLink>
        </div>
        </MenuItem>
        <MenuItem item="Schedule" active={active} setActive={setActive} />
        <MenuItem item="Information" active={active} setActive={setActive}/>
      </Menu>
      </div>
    </>
  )
}

export default NavMenu
