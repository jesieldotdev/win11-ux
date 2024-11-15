import {  ChevronRight, LucideIcon } from "lucide-react"

interface CardItemProps {
    title: string
    description: string
    icon: LucideIcon
}

export const CardItem = ({
    description,
    icon,
    title
}: CardItemProps) => {
    const lucidIcon = { icon }
    return (
        <div className="backdrop-blur-sm bg-white/10 p-6 rounded-md flex items-center justify-between hover:bg-white/20">
            <div className="flex items-center gap-6">
                <lucidIcon.icon size={24} />

                <div className="flex flex-col gap-0">
                    <p className="text-lg font-medium">{title}</p>
                    <p className="text-sm text-zinc-400">{description}</p>
                </div>
            </div>

            <div>
                <ChevronRight size={20} />
            </div>

        </div>
    )
}