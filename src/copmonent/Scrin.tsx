import React from "react";


type ScreenType = {
    value: number
    maxValue: number
    startValue:number
}
export const Screen = (props: ScreenType) => {
    return (
        <div className={'tablet'}>
            <span className={props.value === props.maxValue  ? 'text-red' : 'text'
            }>{  props.value  } </span>
        </div>
    )
}
