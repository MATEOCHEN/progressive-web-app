import React from "react"
import { IconProperty } from "src/types/components/icons"

const DeleteIcon = (props: IconProperty) => {
    return (
        <svg className={props.className} width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17,4V5H15V4H9V5H7V4A2,2,0,0,1,9,2h6A2,2,0,0,1,17,4Z"></path><path d="M20,6H4A1,1,0,0,0,4,8H5V20a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V8h1a1,1,0,0,0,0-2ZM11,17a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Z"></path>
        </svg>
    )
}

const DeleteIconMemo = React.memo(DeleteIcon)

export default DeleteIconMemo