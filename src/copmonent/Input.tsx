import React, {ChangeEvent} from 'react';

type InputTypeProps = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    errorsValue:boolean
}

export const Input = (props: InputTypeProps) => {

    let onChangeMaxNumber = (e: ChangeEvent<HTMLInputElement>,) => {
        props.setMaxValue(Number(e.currentTarget.value))

    }
    let onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
    }
    return (
        <div className={'inputs-block'}>
            <div className={'inputs-max'}>
                <label className={'maxValue'} > maxValue : </label>
                <input className={props.errorsValue ? 'inputs-red': 'inputs'} type="number"
                       value={props.maxValue} onChange={onChangeMaxNumber} width={ "min-width: 1em"}  />
            </div>
            <div className={'inputs-start'}>
                <label className={'startValue'}> startValue : </label>
                <input className={props.errorsValue ? 'inputs-red': 'inputs'} type="number" value={props.startValue} onChange={onChangeStartValue}/></div>
        </div>
)
}