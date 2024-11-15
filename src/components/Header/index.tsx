"use client"
import styled from "@emotion/styled"
import { IconButton } from "@mui/material"
import { ArrowLeft, Minimize2, Minus, X } from "lucide-react"


const Button = styled(IconButton)`
    color: #ffffff;
`

export const HeaderWindow = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <Button><ArrowLeft /></Button>
                <p className="ml-4">Configurações</p>
            </div>
            <div className="flex gap-6 p-2">
                <Button> <Minus /></Button>
                <Button> <Minimize2 /></Button>
                <Button> <X /></Button>
            </div>
        </div>
    )
}