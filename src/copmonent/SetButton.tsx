import React from "react";
import {Button} from "./Button";

type setButton = {
    setNumberHandler: () => void
    maxValue: number
    startValue: number
    errorsValue:boolean
    setData:(data:boolean)=>void
    disable:boolean
    setDisabled:(disable:boolean)=>void
    setResDisabled: (resDisabled: boolean) => void
    setIncDisabled: (incDisabled: boolean) => void
}


export const SetButton = (props: setButton) => {
    let onSetNumberHandler = () => {
        props.setData(false)
        props.setNumberHandler()
        // if(props.maxValue < 0 || props.maxValue <= props.startValue){
        //     debugger
        //     props.setDisabled(true)
        // } else{
        //     props.setDisabled(false)
        // }
        props.setIncDisabled(false)
        props.setResDisabled(false)
        props.setDisabled(true)

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