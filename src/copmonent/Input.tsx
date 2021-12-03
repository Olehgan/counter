import React, {ChangeEvent} from 'react';

type InputTypeProps = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    errorsValue: boolean
    setError: (error: string) => void
    error: string
    setDisabled: (disable: boolean) => void
    setResDisabled: (resDisabled: boolean) => void
    setIncDisabled: (incDisabled: boolean) => void

}

export const Input = (props: InputTypeProps) => {

    let onChangeMaxNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const maxInput = +e.currentTarget.value
        props.setMaxValue(maxInput)
        if (maxInput <= 0 || maxInput <= props.startValue) {
            debugger
            props.setDisabled(true)
            props.setResDisabled(true)
            props.setIncDisabled(true)
        } else {
            props.setDisabled(false)
        }
        if (maxInput <= 0 || maxInput <= props.startValue) {
            props.setError('Error value maxValue')
        } else {
            props.setError('Enter value press button set')
        }
    }

    let onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const minInput = +e.currentTarget.value
        props.setStartValue(minInput)
        if (minInput < 0 || minInput >= props.maxValue) {
            debugger
            props.setDisabled(true)
            props.setResDisabled(true)
            props.setIncDisabled(true)
        } else {
            props.setDisabled(false)
        }
        if (minInput < 0 || minInput >= props.maxValue) {
            props.setError('Error value startValue')
        } else {
            props.setError('Enter value press button set')
        }
    }
    return (
        <div className={'inputs-block'}>
            <div className={'inputs-max'}>
                <label className={'maxValue'}> maxValue : </label>
                <input className={props.maxValue <= 0 || props.maxValue <= props.startValue ? 'inputs-red' : 'inputs'}
                       type="number"
                       value={props.maxValue} onChange={onChangeMaxNumber}/>
            </div>
            <div className={'inputs-start'}>
                <label className={'startValue'}> startValue : </label>
                <input className={props.maxValue <= props.startValue || props.startValue < 0 ? 'inputs-red' : 'inputs'}
                       type="number" value={props.startValue}
                       onChange={onChangeStartValue}/></div>
        </div>
    )
}
