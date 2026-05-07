import React,{useState} from 'react'
import axios from 'axios'

const AddTaskbar = ({fetchtodos}) => {
    const [form, setform] = useState({name:'', isdone:false})
    const handlechange = (e) => {
        setform({...form, [e.target.name]:e.target.value})
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        const data = await axios.post("http://localhost:3000/api/todo/addtodo" , form)
        fetchtodos()
        setform({name:""})
    }
  return (
    <div className='flex py-10 justify-center gap-2'>
        <form onSubmit={handlesubmit}>
        <input type="text" name='name'
         placeholder='Add New Task' value={form.name} onChange={handlechange}
         className='bg-[#DBE2EF] rounded-2xl pl-2 border-[#3F72AF] border-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-none' />
         <button type='submit' 
         className='text-gray-500 bg-[#DBE2EF] rounded-full cursor-pointer p-2 border-2 border-[#3F72AF] hover:border-green-600'>ADD</button>
        </form>
    </div>
  )
}

export default AddTaskbar