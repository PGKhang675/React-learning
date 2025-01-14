import Student from "./Student"

function App() {
  return (
    <>
      <Student name="Khang" age={30} isStudent={false}></Student>
      <Student name="ABC" age={13} isStudent={true}></Student>
      <Student name="XYZ" age={42} isStudent={false}></Student>
      <Student name="EDF"></Student>    
    </>
  )
}

export default App
