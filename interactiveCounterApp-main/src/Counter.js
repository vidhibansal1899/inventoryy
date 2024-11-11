import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <Button label="Increment" onClick={increment} />
            <Button label="Decrement" onClick={decrement} />
            <Button label="Reset" onClick={reset} />
        </div>
    );
};

export default Counter;