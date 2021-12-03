import React from "react";
import {Button} from "./Button";

type ButtonsTypeProps = {
    value: number
    onIncCount: () => void
    onResetCount: () => void
    maxValue: number
    startValue: number
    errorsValue: boolean
    setIncDisabled: (incDisabled: boolean) => void
    incDisabled: boolean
    setResDisabled: (resDisabled: boolean) => void
    resDisabled: boolean
    setError: (error: string) => void
}

export const Buttons = (props: ButtonsTypeProps) => {
    let onIncCountHandler = () => {
        props.onIncCount()
        if (props.maxValue <= props.startValue || props.maxValue <= 0 || props.startValue < 0 || props.value === props.maxValue - 1) {
            props.setIncDisabled(true)
        } else {
            props.onIncCount()
            props.setResDisabled(false)
        }

    }
    let onResetCountHandler = () => {
        // // props.setDisable(true)
        props.onResetCount()
        props.setResDisabled(true)
        props.setIncDisabled(false)
        // if (props.startValue < 0 || props.startValue >= props.maxValue || props.value === props.startValue) {
        //     props.setResDisabled(true)
        // } else {
        //     props.onResetCount()
        //     props.setIncDisabled(false)
        // }

        // if (props.maxValue <= props.startValue || props.maxValue <= 0 || props.value === props.startValue - 1) {
        //     props.setDisable(true)
        // } else {
        //     props.setDisable(false)
        // }


    }
    // let disableButtonHandler = () => {
    //     if (props.value === props.startValue || props.errorsValue) {
    //         props.setDisable(true)
    //     }
    // }
    return (
        <div className='block'>
            <div className='buttons-block'>
                <Button onClick={onIncCountHandler} title={'Inc'}
                        isDisabled={props.incDisabled}/>
                <Button onClick={onResetCountHandler} title={'Reset'}
                        isDisabled={props.resDisabled}/>
            </div>

        </div>

    )
}