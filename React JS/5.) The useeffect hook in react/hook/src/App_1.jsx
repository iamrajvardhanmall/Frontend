import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  // let a = 0;
  // useEffect(() => {
  //   a = a + 1;
  //   console.log(`Rerendering and the value of a is: ${a}`);
  // });
  // Here, 'a' is re-initialized to 0 on every render, so it will always log 1.
  

  // useRef Hook
  const a = useRef(0);
  useEffect(() => {
    a.current = a.current + 1;
    console.log(`Rerendering and the value of a is: ${a.current}`);
  });
  // Here, 'a' is a ref, so its value persists across renders, and it will log an incrementing value each time.
  // NOTE: If we change state or props, the component re-renders, but when we change Ref the component does not re-render.


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
