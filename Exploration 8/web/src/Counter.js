import React, { useState } from 'react';

const fakeUseState = (val) => { 
    const state = val;

    const setState = (val) => {
        state = val;
    };

    return [state, setState];
}

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Counter;