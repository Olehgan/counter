import React from "react";
import {Button} from "./Button";

type ButtonsTypeProps = {
    value: number
    onIncCount: () => void
    onResetCount: () => void
    maxValue: number
    startValue: number

}

export const Buttons = (props: ButtonsTypeProps) => {
    let errorValue = props.maxValue < 0 || props.maxValue <= props.startValue || props.startValue < 0
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
                        isDisabled={props.value === props.maxValue || errorValue}/>
                <Button onClick={onResetCountHandler} title={'Reset'}
                        isDisabled={props.value === props.startValue || errorValue}/>
            </div>

        </div>

    )
}