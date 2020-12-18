import React, { useEffect, useState } from 'react';

const Assignment = () => {
    const [input, setInput] = useState('');
    const [text, setText] = useState('');

    const click = () => setText(input);

    const change = e => {
        setInput(e.target.value);
    }

    useEffect(() => {
        console.log(input);
    }, [input]);

    const key_down = (e) => {
        if(e.key == "Enter") {
            console.log('Enter');
        }
    }

    return (
        <div>
            <h1>Assignment</h1>
            <input
                placeholder="Enter any Text"
                value={input}
                onChange={e => setInput(e.target.value)}
                // onChange={change}
                onKeyDown={key_down}
            />
            <button onClick={click}>Set</button> 
            <p>
                {text}
            </p>
        </div>
    )
};

export default Assignment;