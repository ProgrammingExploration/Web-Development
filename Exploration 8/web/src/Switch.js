import React, { useState } from 'react';

const Switch = () => {
    const [state, setState] = useState(false);

    return (
        <div>
            <button onClick={() => setState(!state)}>{state ? "on" : "off"}</button>
        </div>
    )
}

export default Switch;