import { useState, useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setfirst] = useState(0)
  const [color, setcolor] = useState(0)

  // useEffect(() => {

  // }, [])
  // This is basic useEffectSnippet example


  // CASE 1: Run on every render
  // useEffect(() => {
  //   alert("Hey I will run on every render");
  // });

  // CASE 2: Run only on first render
  // useEffect(() => {
  //   alert("Hey Welcome to the page. This is the first render");
  // }, []);

  // CASE 3: Run only when certain values change
  // useEffect(() => {
  //   alert("Hey I am running because color was changed");
  // }, [color, count]);  
  // i.e.., This will run the effect whenever either 'color' or 'count' changes.



  // useEffect(() => {
  //   alert("Hey welcome to my page")
  //   // This will make alert pop up when the component mounts/component(page) is loaded
  // }, []) // '[]' this empty array means the alert will occur when nothing changes (because it has no dependencies or arr is empty)

  // useEffect(() => {
  //   alert("Count has changed");
  //   setcolor(color + 1)
  // }, [count]);  // This effect runs every time the 'count' state changes

  // useEffect(() => {
  //   alert("First has changed");
  // }, [first])


  useEffect(() => {
    alert("Count was Changed")
    setcolor(color + 1)
  }, [count])

  return (
    <>
    <Navbar color = {"blue" + color} />
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
