import React, {useState} from 'react';

function Car(){
    let [car, setCar] = useState({year: 2024, make: "Ford", model: "Everest" })

    function handleYearChange(e){
        setCar(c => ({...c, year:e.target.value}))
    }

    function handleMakeChange(e){
        setCar(c => ({...c, make:e.target.value}))
    }

    function handleModelChange(e){
        setCar(c => ({...c, model:e.target.value}))
    }

    return(
        <>
            <p>Your favorite car is {car.year} {car.make} {car.model}</p>
            <input type="number" onChange = {handleYearChange} value = {car.year}/>
            <input type="text" onChange = {handleMakeChange} value = {car.make}/>
            <input type="text" onChange = {handleModelChange} value = {car.model}/>

        
        </>
    )
}

export default Car