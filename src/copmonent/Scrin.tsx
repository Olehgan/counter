import React from "react";


type ScreenType = {
    value: number
    maxValue: number
    startValue: number
    errorsValue: boolean
    error: string
    data: boolean
}
export const Screen = (props: ScreenType) => {

    return (
        <div className='tablet-block'>
            {props.data ?
                < div className={'tablet'}>
                <span className={props.value === props.maxValue || props.errorsValue ? 'text-red' : 'text'
                }>
                    {props.error}
                </span>
                </div>

                :
                < div className={'tablet'}>
                <span className={props.value === props.maxValue || props.errorsValue ? 'text-red' : 'text'
                }>
                    {props.value}
                </span>
                </div>
            }
        </div>
    )
}
