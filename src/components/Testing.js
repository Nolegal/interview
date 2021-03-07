import React, { useState } from 'react';

function Testing() {

    const [counter, setCounter] = useState(0);

    function add() {
        let currentCount = counter;
        currentCount++;
        setCounter(currentCount);

    }

    function subtract() {
        let currentCount = counter;
        currentCount--;
        setCounter(currentCount);

    }
    const red = {
        color: 'red',
    }
    const green = {
        color: 'green',
    }
    return (
        <>

            <section>
                <h2>Counter</h2>
                <button style={red} onClick={add}>add</button>
                <button style={green} onClick={subtract}>remove</button>
                <div>{counter}</div>
            </section>
        </>
    );
}

export default Testing