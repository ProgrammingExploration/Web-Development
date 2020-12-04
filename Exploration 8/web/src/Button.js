import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button>{this.props.title}</button>
            </div>
        )
    }
};

export default Button;