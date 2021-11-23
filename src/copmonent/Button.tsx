import React from "react";

type ButtonTypeProps = {
    onClick: () => void
    isDisabled:boolean
    title:string
}

export const Button = (props: ButtonTypeProps) => {

    return (
        <div className={'buttons'}>
            <button
                className={'button'}
                onClick={props.onClick}
                disabled={props.isDisabled}>
                {props.title}
            </button>
        </div>
    )
}