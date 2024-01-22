import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './components/Greetings'
import ToDoList from './components/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greetings />
      <ToDoList />
    </>
  )
}

export default App
