import React, { useState } from 'react';

const Toggle = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(!isOpen)}>{isOpen ? "Open" : "Closed"}</button>
        </div>
    )
}

export default Toggle;