import React, {ChangeEvent} from 'react';

type InputTypeProps = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    errorsValue: boolean
    setError: (error: string) => void
    error: string
}

export const Input = (props: InputTypeProps) => {

    let onChangeMaxNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const maxInput = +e.currentTarget.value
        props.setMaxValue(maxInput)
        if (maxInput < 0 || maxInput <= props.startValue || props.startValue < 0) {
            props.setError("Error value mx")
        } else {
            props.setError('input value pres button')
        }
    }

    let onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const minInput = +e.currentTarget.value
        props.setStartValue(minInput)
        if (props.maxValue < 0 || props.maxValue <= minInput || minInput < 0) {
            props.setError("Error value st")
        } else {
            props.setError('input value pres button')
        }
    }
    return (
        <div className={'inputs-block'}>
            <div className={'inputs-max'}>
                <label className={'maxValue'}> maxValue : </label>
                <input className={props.errorsValue ? 'inputs-red' : 'inputs'} type="number"
                       value={props.maxValue} onChange={onChangeMaxNumber}/>
            </div>
            <div className={'inputs-start'}>
                <label className={'startValue'}> startValue : </label>
                <input className={props.errorsValue ? 'inputs-red' : 'inputs'}
                       type="number" value={props.startValue}
                       onChange={onChangeStartValue}/></div>
        </div>
    )
}