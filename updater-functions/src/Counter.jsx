import React, {useState} from 'react';

// updater function = - A function passed as an argument to setState() usually
//                    e.g. setYear(y => y + 1)
//                    - Allow for multiple safe updates based on the previous this.state.
//                    - Used with multiple state updates and asynchronous functions 
//                    - Good practice to use update functions


// Takes the PENDING(not CURRENT) state to calculate the next state.
// React puts your updater function into a queue.
// During the next render, it will call them in the same order.
function Counter() {

    let [count, setCount] = useState(0);

    function increaseCount(){
    // This will only set Count to 1 for 3 times
        // setCount(c = c + 1)
        // setCount(c = c + 1)
        // setCount(c = c + 1)

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);

    }

    function decreaseCount(){
        setCount(c => c - 1)
    }

    //No need to use Updater function because we are not using the previous state
    function resetCount(){
        setCount(0)
    }

    return(<>
        <h1>Counter</h1>
        <p>{count}</p>

        <button onClick = {increaseCount}>Increment</button>
        <button onClick = {decreaseCount}>Decrenent</button>
        <button onClick = {resetCount}>Reset</button>

    </>)
}

export default Counter