import React, {useEffect, useState} from 'react';
import './App.css';
import {Screen} from "./copmonent/Scrin";
import {Buttons} from "./copmonent/Buttons";
import {Input} from "./copmonent/Input";
import {SetButton} from "./copmonent/SetButton";


const App = () => {

    let [count, setCount] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    let [startValue, setStartValue] = useState(0)
    // let [error, setError] = useState("")
    let errorsValue = maxValue < 0 || maxValue <= startValue || startValue < 0


    useEffect(() => {
        let countAsString = localStorage.getItem('maxValue')
        if (countAsString) {
            let newCount = JSON.parse(countAsString)
            setMaxValue(newCount)
        }
    }, []);

    useEffect(() => {
        let countAsString = localStorage.getItem('startValue')
        if (countAsString) {
            let newCount = JSON.parse(countAsString)
            setStartValue(newCount)
        }
    }, [])


    const onIncCount = () => {
        setCount(count + 1);
    }

    const onResetCount = () => {
        setCount(startValue)
    }
    const setNumberHandler = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))

    }


    return (
        <div className={'common-block'}>
            <div className='counter'>
                <Screen
                    errorsValue={errorsValue}
                    maxValue={maxValue}
                    value={count}
                    startValue={startValue}/>

                <Buttons onIncCount={onIncCount}
                         onResetCount={onResetCount}
                         value={count}
                         maxValue={maxValue}
                         startValue={startValue}
                /></div>

            <div className={'settings-block'}>
                <Input maxValue={maxValue}
                       startValue={startValue}

                       setMaxValue={setMaxValue}
                       setStartValue={setStartValue}
                       errorsValue={errorsValue}

                />

                <SetButton setNumberHandler={setNumberHandler}
                           maxValue={maxValue}
                           startValue={startValue}
                           errorsValue={errorsValue}

                />
            </div>

        </div>
    )
}

export default App;
