// useEffect = React Hook that tells React to do some code when (PICK ONE):
//             - This Component re-renders
//             - This Component mounts 
//             - The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})       //Runs after every re-render
// 2. useEffect(() => {}, [])   //Runs only on mount
// 2. useEffect(() => {}, [])   //Runs on mount + when value changes

// Uses
// #1 Event listener
// #2 DOM Manipulation
// #3 Subscriptions (real-time data)
// #4 Fetching data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from 'react';

function MyComponents(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    //without value of dependencies, thousands of events are gonna be created
    //Add [] -> only run on mount
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        //return to clean up
        return() => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    return(
        <>
            <p>Width: {width} px</p>
            <p>Height: {height} px</p>
        </>
    )

}

export default MyComponents 