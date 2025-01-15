import List from "./List";

function App(){

  const fruits = [
    {id: 1, name: "apple", calories: 123},
     {id: 1, name:"banana", calories: 67},
      {id: 1, name: "orange", calories: 150},
       {id: 1, name: "grapes", calories: 123},
        {id: 1, name: "pineapple", calories: 100}];

  const vegetables = [
    {id: 1, name: "tomato", calories: 123},
     {id: 1, name:"carrot", calories: 67},
      {id: 1, name: "cabbage", calories: 150},
       {id: 1, name: "broccoli", calories: 123},
        {id: 1, name: "potato", calories: 100}];

  return(
    <>
      <List items = {fruits} category = "Fruits" ></List>
      <List items = {vegetables} category = "Vegetables"></List>
      <List></List>
    </>
  )
}

export default App