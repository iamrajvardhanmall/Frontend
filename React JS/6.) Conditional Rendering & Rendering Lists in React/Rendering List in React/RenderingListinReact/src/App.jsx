import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [shoebtn, setshoebtn] = useState(false)
  const [todo, setodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey I am 2 todo",
      desc: "I am a good todo 2"
    },
    {
      title: "Hey I am 3 todo",
      desc: "I am a good todo 3"
    },
    {
      title: "Hey I am 4 todo",
      desc: "I am a good todo 4"
    },
    {
      title: "Hey I am 5 todo",
      desc: "I am a good todo 5"
    },
  ])

  // const Todo = ({ todo }) => {
  //   return (<>
  //     <div className="m-4 border border-black p-2 rounded-lg">
  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </div>
  //   </>)
  // }

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

      {/* Rendering todo List in React */}
      {todo.map(todo => {
        // return <Todo key={todo.title} todo={todo} />
        return (
          <div key={todo.title} className="m-4 border border-black p-2 rounded-lg">
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        )
      })}

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
