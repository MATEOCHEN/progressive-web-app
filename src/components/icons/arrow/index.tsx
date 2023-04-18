import { IconProperty } from "src/types/components/icons"
import React from "react"

const ArrowIcon = ({ ...props }: IconProperty) => {
    return (
        <svg
            className={props.className}
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"
        >
            <path stroke={props.color || "#000"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 10h16m0 0l-7-7m7 7l-7 7" />
        </svg>
    )
}

const ArrowIconMemo = React.memo(ArrowIcon)

export default ArrowIconMemo