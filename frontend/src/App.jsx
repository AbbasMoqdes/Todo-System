import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar'
import AddTaskbar from './components/AddTaskbar'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  const [todos, settodos] = useState([])
    const fetchtodos = async (e) => {

        const todo = await axios.get("http://localhost:3000/api/todo/gettodos")
         console.log("FETCHED DATA:", todo.data);
        settodos(todo.data)
        console.log("data fecthed")
    }
    useEffect(() => {
      fetchtodos()
    
    }, [])
  return (
    <>
    <div className='bg-[#112D4E] h-screen'>

     <Navbar/>
     <AddTaskbar fetchtodos={fetchtodos}/>
     <Card todos={todos} fetchtodos={fetchtodos} />
    </div>
    </>
  )
}

export default App
