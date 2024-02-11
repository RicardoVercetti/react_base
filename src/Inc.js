import { useState } from 'react';

export const AddOn = () => {
    const [num, setNum] = useState(0);

    const increaseNumber = () => {
        setNum(num + 1);
    }

    const resetNumber = () => {
        setNum(0);
    }

    const decreaseNumber = () => {
        num > 0 ? setNum(num - 1) : setNum(0);
    }

    return (
        <div>
            <h1>Hola</h1>
            <p> {num}</p>
            <button onClick={increaseNumber}>Increment Number</button>
            <button onClick={resetNumber}>Reset Number</button>
            <button onClick={decreaseNumber}>decreaseNumber Number</button>
        </div>
    );
}
