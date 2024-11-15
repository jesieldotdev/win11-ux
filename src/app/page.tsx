"use client"

import SizeAvatars from "@/components/Avatar";
import { HeaderWindow } from "@/components/Header";
import { SideMenu } from "@/components/Menu";
import SearchInput from "@/components/SearchInput";
import styled from "@emotion/styled";

import { User, AppWindow, Bluetooth, Brush, Gamepad2, Globe2, House, LayoutGrid, LucideIcon, Wifi, LaptopMinimal, Volume2, Bell, Power, HardDrive, } from "lucide-react";
import React from "react";
import { Container, LeftContainer, RightContainer } from "./style";
import { CardItem } from "@/components/CardItem";

export interface MenuItemsProps {
  name: string
  icon: LucideIcon
}

interface SystemMenuItemsProps {
  title: string
  description: string
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

  const systemMenuItems: SystemMenuItemsProps[] = [
    {
      title: 'Tela',
      description: 'Monitores, brilho, luz noturna, perfil de exibição',
      icon: LaptopMinimal
    },
    {
      title: 'Som',
      description: 'Níveis de volume, saída, entrada, dispositivos de som',
      icon: Volume2
    },
    {
      title: 'Notificações',
      description: 'Alertas de aplicativos e do sistema, não incomodar',
      icon: Bell
    },
    {
      title: 'Energia e bateria',
      description: 'Repouso, uso de bateria, economia de energia',
      icon: Power
    },
    {
      title: 'Armazenamento',
      description: 'Espaço de armazenamento, unidades, regras de configuração',
      icon: HardDrive
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
      <Container
        className="flex min-w-full h-screen p-6 gap-6 flex-col md:flex-row ">

        <LeftContainer className="w-full md:w-1/4 gap-6  flex flex-col">
          <SizeAvatars />
          <SearchInput />

          <SideMenu
            selectedItem={selectedItem}
            handleSelectItem={handleSelectItem}
            items={menuItems} />
        </LeftContainer>

        <RightContainer className="w-full md:w-3/4 flex-col flex gap-2">
          <p className="font-bold text-3xl">{selectedItem}</p>


          {
            systemMenuItems.map(item => (
              <CardItem
                title={item.title}
                icon={item.icon}
                description={item.description}
                key={item.title} />
            ))
          }

        </RightContainer>

      </Container>
    </div>
  );
}
