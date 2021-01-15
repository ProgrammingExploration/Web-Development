import React from 'react';
import {
    Link
} from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <div>
            <Link to="/">Home</Link> <br />
            <Link to="/input">Assignment Example</Link>
        </div>
    )
}

export default Navigation;