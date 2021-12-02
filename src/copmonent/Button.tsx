import React from "react";

type ButtonTypeProps = {
    onClick: () => void
    isDisabled:boolean
    title:string
}

export const Button = (props: ButtonTypeProps) => {

    return (
        <div>
            <button
                className='common-button'
                onClick={props.onClick}
                disabled={props.isDisabled}>
                {props.title}
            </button>
        </div>
    )
}