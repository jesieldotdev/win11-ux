"use client"

import SizeAvatars from "@/components/Avatar";
import { HeaderWindow } from "@/components/Header";
import { SideMenu } from "@/components/Menu";
import SearchInput from "@/components/SearchInput";
import { IconButton } from "@mui/material";

import { User, AppWindow, ArrowLeft, Bluetooth, Brush, Gamepad2, Globe, Globe2, House, LayoutGrid, LucideIcon, Minimize2, Minus, Wifi, X } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface MenuItemsProps {
  name: string
  icon: LucideIcon
}

export default function Home() {

  const [selectedItem, setSelectedItem] = React.useState<string>('Início')

  const menuItems: MenuItemsProps[] = [
    {
      name: 'Início',
      icon: House
    },
    {
      name: 'Sistema',
      icon: AppWindow
    },
    {
      name: 'Bluetooth e dispositivos',
      icon: Bluetooth
    },
    {
      name: 'Rede e internet',
      icon: Wifi
    },
    {
      name: 'Personalização',
      icon: Brush
    },
    {
      name: 'Aplicativos',
      icon: LayoutGrid
    },
    {
      name: 'Contas',
      icon: User
    },
    {
      name: 'Hora e idioma',
      icon: Globe2
    },
    {
      name: 'Jogos',
      icon: Gamepad2
    },
  ]

  function handleSelectItem(e: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string) {
    e.preventDefault()
    e.stopPropagation()
    setSelectedItem(name)
  }

  return (
    <div>
      <HeaderWindow />
      <div className="flex min-w-full h-screen p-6 gap-6 flex-col md:flex-row">
        <div className="w-full md:w-1/4 gap-6 flex flex-col">
          <SizeAvatars />
          <SearchInput />
          <SideMenu
            selectedItem={selectedItem}
            handleSelectItem={handleSelectItem}
            items={menuItems} />
        </div>
        <div className="w-full md:w-3/4">
          <p className="font-bold text-3xl">{selectedItem}</p>
        </div>
      </div>
    </div>
  );
}
