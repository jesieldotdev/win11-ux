import { MenuItemsProps } from "@/app/page"

interface SideMenuProps {
    items: MenuItemsProps[]
    handleSelectItem: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string)=> void
    selectedItem: string
}

export const SideMenu = ({items, handleSelectItem, selectedItem}: SideMenuProps) => {
    return (
        <>
            <div className="flex flex-col gap-4 mt-4">

                {
                    items.map(item => (
                        <div
                            onClick={e => handleSelectItem(e, item.name)}
                            key={item.name}
                            className={`flex gap-4 items-center text-1xl  px-4 py-2 rounded-md select-none cursor-pointer ${selectedItem === item.name ? 'bg-gray-700' : ''}`}>
                            <item.icon />
                            <p className="font-medium">{item.name}</p>
                        </div>
                    ))
                }



            </div>
        </>
    )
}