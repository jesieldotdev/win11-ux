import { MenuItemsProps } from "@/app/page";

interface SideMenuProps {
    items: MenuItemsProps[];
    handleSelectItem: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string) => void;
    selectedItem: string;
}

export const SideMenu = ({ items, handleSelectItem, selectedItem }: SideMenuProps) => {

    const blur = 'backdrop-blur-sm bg-white/10'
    return (
        <>
            <div className="flex flex-col gap-1  p-4 rounded-lg">
                {
                    items.map(item => (
                        <div
                            onClick={e => handleSelectItem(e, item.name)}
                            key={item.name}
                            className={`flex gap-4 items-center text-1xl px-4 py-2 rounded-md select-none cursor-pointer transition duration-200 ${
                                selectedItem === item.name ? `${blur} text-white` : 'hover:bg-white/10 hover:text-white'
                            }`}>
                            <item.icon />
                            <p className="font-medium">{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};
