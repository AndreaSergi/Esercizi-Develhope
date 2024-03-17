import { useEffect, useState, useRef } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({initialValue, decrement, increment}){

    const [counter , setCounter] = useState(initialValue);
    const lastCounterRef = useRef(initialValue);
    const upOrDownRef = useRef(null);

    useEffect(() => {
        const upOrDown = counter > lastCounterRef.current ? 'Up' : 'Down';

        if (upOrDownRef.current !== upOrDown) {
          upOrDownRef.current = upOrDown;
          console.log('Is it going up or down?', upOrDown);
        }

        lastCounterRef.current = counter;
      }, [counter]);


    function handleCounterDecrement() {
        setCounter((c) => c - decrement)
    }

    function handleCounterIncrement() {
        setCounter((c) => c + increment)
    }

    function handleCounterReset() {
        setCounter(initialValue)
    }

    return (
        <div>
            <CounterDisplay counter={counter}/>
            <button onClick={handleCounterDecrement}>-</button>
            <button onClick={handleCounterIncrement}>+</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}