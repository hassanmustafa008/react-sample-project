import React from 'react';
import Counter from "./Counter";
import AddCounter from "./AddCounter";
import RemoveCounter from "./RemoveCounter";

class CounterComp extends React.Component {
    render() {
        return (
            <div className="cotainer">
                <Counter></Counter>
                <AddCounter></AddCounter>
                <RemoveCounter></RemoveCounter>
            </div>
        )
    }
}

export default CounterComp;