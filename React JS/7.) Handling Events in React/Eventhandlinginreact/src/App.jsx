import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Raj")
  const [form, setForm] = useState({
    email: "",
    phone: ""
  });

  const handleClick = () => {
    alert("Button Clicked")
  }

  const handleMouseOver = () => {
    alert("Mouse Over the Red Div")
  }

  const handleChange = (e) => {
    // setName(e.target.value);
    setForm({...form, [e.target.name]:e.target.value});
    // setForm is Asynchronous
    console.log(form);
  }


  return (
    <>
      <div className="button">
        <button onClick = {handleClick}>Click Me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a Red div
      </div> */}

      <input type="text" name="email" value ={form.email?form.email:""} onChange = {handleChange}/>

      <input type="text" name="phone" value ={form.phone?form.phone:""} onChange = {handleChange}/>
    </>
  )
}

export default App
