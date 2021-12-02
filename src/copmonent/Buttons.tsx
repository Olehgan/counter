import React from "react";
import {Button} from "./Button";

type ButtonsTypeProps = {
    value: number
    onIncCount: () => void
    onResetCount: () => void
    maxValue: number
    startValue: number
    errorsValue: boolean

}

export const Buttons = (props: ButtonsTypeProps) => {
    let onIncCountHandler = () => {
        props.onIncCount()
    }
    let onResetCountHandler = () => {
        props.onResetCount()
    }
    return (
        <div className='block'>
            <div className='buttons-block'>
                <Button onClick={onIncCountHandler} title={'Inc'}
                        isDisabled={props.value === props.maxValue || props.errorsValue}/>
                <Button onClick={onResetCountHandler} title={'Reset'}
                        isDisabled={props.value === props.startValue || props.errorsValue}/>
            </div>

        </div>

    )
}