import React from 'react';

class CounterC extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    };

    increment = () => {
        const curr_count = this.state.count;
        this.setState({
            ...this.state,
            count: curr_count + 1
        });
    }

    decrement = () => {
        const curr_count = this.state.count;
        this.setState({
            ...this.state,
            count: curr_count - 1
        });
    }

    render() {
        return (
            <div>
                <h2>Class Counter</h2>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
};

export default CounterC;