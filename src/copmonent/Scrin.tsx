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
                <span className={props.errorsValue ? 'text-error' : 'start-text'}
                >
                    {props.errorsValue ? props.error: props.error}
                </span>
                </div>
                :
                < div className={'tablet'}>
                <span
                    className={props.value === props.maxValue ? 'error-number' : 'text' && props.errorsValue ? 'text-error' : 'text'
                    }>
                   {props.errorsValue ? props.error : props.value}
                </span>
                </div>
            }
        </div>
    )
}
// < div className={'tablet'}>
//                 <span className={props.value === props.maxValue || props.errorsValue ? 'text-red' : 'text'
//                 }>
//                    {props.value ? props.value: props.error }
//                 </span>
// </div>