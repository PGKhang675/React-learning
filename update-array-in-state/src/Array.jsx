import React, {useState} from 'react';

function Array() {

    let [foods, setFoods] = useState(["Apple", "Banana", "Mango"])

    function addFood(){
        const foodToAdd = document.getElementById("text-input").value;
        document.getElementById("text-input").value = ""
        setFoods(f => [...f, foodToAdd])
    }

    function removeFood(index){
        setFoods(f => f.filter((_, i) => i !== index));
    }

    return (
    <>
        <h2>List of Foods</h2>
        <ul>
            {foods.map((food, index) => 
            <li key = {index} onClick = {() => removeFood(index)}>
                {food}
            </li>)}
        </ul>
        <input id = "text-input" type="text" placeholder='Enter your food' />
        <button onClick = {addFood}>Add food</button>
    </>)
}

export default Array