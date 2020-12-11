import React, { useState } from 'react';

const Input = () => {
    const [input, setInput] = useState('');
    
    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => console.log(input)}>Print Out</button>
        </div>
    )
}

export default Input;