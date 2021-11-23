import React from "react";


type ScreenType = {

    value: number
    maxValue: number
    startValue:number
    errorsValue: boolean
}
export const Screen = (props: ScreenType) => {
   return (
       <div className= 'tablet-block'>
           <div className={'tablet'}>
            <span className={props.value === props.maxValue || props.errorsValue ? 'text-red' : 'text'
            }>{props.errorsValue ? 'Error' : props.value} </span>
           </div>
       </div>
    )
}
