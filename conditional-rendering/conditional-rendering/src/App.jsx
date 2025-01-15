import UserGreeting from "./UserGreeting";

function App(){
  return(
    <>
      <UserGreeting isLoggedIn = {true} username = "Khang"></UserGreeting>
      <UserGreeting></UserGreeting>
    </>
  )
}

export default App