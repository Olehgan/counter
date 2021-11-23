import React from "react";
import {Button} from "./Button";

type setButton = {
    setNumberHandler: () => void
    maxValue: number
    startValue: number
    errorsValue:boolean
}


export const SetButton = (props: setButton) => {
    let onSetNumberHandler = () => {
        props.setNumberHandler()
    }
    return (
        <div className={'set-button'} >
            <Button  onClick={onSetNumberHandler}
                    isDisabled={props.errorsValue}
                    title={'Set'}
            />
        </div>
    )
}