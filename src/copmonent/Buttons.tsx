import React from "react";
import {Button} from "./Button";

type ButtonsTypeProps = {
    value: number
    onIncCount: () => void
    onResetCount: () => void
    maxValue: number
    startValue: number
    errorsValue: boolean
    setDisable: (disable: boolean) => void
    disable: boolean

}

export const Buttons = (props: ButtonsTypeProps) => {
    let onIncCountHandler = () => {
        props.onIncCount()
        // if (props.value === props.startValue || props.errorsValue) {
        //     props.setDisable(true)
        // }else{
        //     props.setDisable(false)
        // }

    }
    let onResetCountHandler = () => {
        // props.setDisable(true)
        props.onResetCount()
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
                        isDisabled={props.disable}/>
                <Button onClick={onResetCountHandler} title={'Reset'}
                        isDisabled={props.disable}/>
            </div>

        </div>

    )
}