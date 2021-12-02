import React from "react";
import {Button} from "./Button";

type setButton = {
    setNumberHandler: () => void
    maxValue: number
    startValue: number
    errorsValue:boolean
    setData:(data:boolean)=>void
    disable:boolean
}


export const SetButton = (props: setButton) => {
    let onSetNumberHandler = () => {
        props.setData(false)
        props.setNumberHandler()


    }
    return (
        <div className='set-button'>
            <Button  onClick={onSetNumberHandler}
                    isDisabled={props.disable}
                    title={'Set'}
            />
        </div>
    )
}