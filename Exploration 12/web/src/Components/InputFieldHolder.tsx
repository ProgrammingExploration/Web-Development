import React, { useState } from 'react';
import InputField from './InputField';

const InputFieldHolder: React.FC = () => {
    const [state, setState] = useState("");

    return (
        <div>
            <InputField 
                placeholder="Hi" 
                value={state}
                onChange={(e) => {
                    console.log(e.target.value);
                    setState(e.target.value);
                }}
            />
        </div>
    )
}

export default InputFieldHolder;