import React from 'react';
import Counter from "../../container/Counter";
import AddCounter from "../../container/AddCounter";
import RemoveCounter from "../../container/RemoveCounter";

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