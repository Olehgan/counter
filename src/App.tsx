import React, {useState} from 'react';
import './App.css';
import {Screen} from "./copmonent/Scrin";
import {Buttons} from "./copmonent/Buttons";


const App = () => {
    let maxValue = 5;
    let startValue = 0;
    let [count, setCount] = useState(0)


    const onIncCount = () => {
        setCount(count + 1);
    }

    const onResetCount = () => {
        setCount(startValue)
    }


    return (
        <div>
            <div className='counter'>
                <Screen
                    maxValue={maxValue}
                    value={count}
                    startValue={startValue}/>

                <Buttons onIncCount={onIncCount}
                         onResetCount={onResetCount}
                         value={count}
                         maxValue={maxValue}
                         startValue={startValue}
                /></div>


        </div>
    )
}

export default App;
