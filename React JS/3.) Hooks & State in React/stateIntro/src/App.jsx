import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // This means count is a state variable
  // setCount is a function to update the state

  return (
    <>
      <div>
        The count is {count}
      </div>
      <button onClick = {() => {setCount(count+1)}}>Update Count</button>

    </>
  )


  // let a = 10;
  // return (
  //   <>
  //     <div>
  //       The value of a is {a}
  //     </div>
  //     <button onClick={() => { a += 1 }}>Update a</button>
  //   </>
  // )
  // This is not how state works in React
  // You need to use useState hook to manage state in React
  
}

export default App
