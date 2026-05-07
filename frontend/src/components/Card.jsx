import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Card = ({todos, fetchtodos}) => {
  const [form, setform] = useState({ name:''})
  const [editid, seteditid] = useState(null)
    const handledelete = async (id) => {
      await axios.delete(`http://localhost:3000/api/todo/deletetodo/${id}`)
       fetchtodos()
    }
  const handleedit = async (todo) => {
    seteditid(todo._id)
    setform({name : todo.name})
    
    
  }
  const handlechange = async (e) => {

    setform({ ...form , [e.target.name] : e.target.value
    
    })
  }
  const handlesave = async (id) => {
    await axios.put(`http://localhost:3000/api/todo/updatetask/${id}`, form)
    seteditid(null)
    fetchtodos()
  }

  return (
    <div className='flex justify-center gap-2 flex-col w-auto'>
        
           {todos.map((todo)=>{
            return <> <div className='flex mx-auto py-3 my-2 bg-[#3F72AF]  text-white px-2 rounded-2xl gap-4 w-fit' key={todo._id} >
             {editid === todo._id? <input type="text" name='name' value={form.name} onChange={handlechange}/> : <span>{todo.name} </span>  }
            <button className='bg-[#f70000] text-white  rounded-2xl p-2'
            onClick={()=>{handledelete(todo._id)}} >Dell</button> 
            {editid === todo._id?  
            <button className='bg-[#00ff62] text-white  rounded-2xl p-2'
            onClick={()=>{handlesave(todo._id)}}>save</button> :
            <button className='bg-[#00ff62] text-white  rounded-2xl p-2'
            onClick={()=>{handleedit(todo)}}>Edit</button>}

            </div>
            </>
           })}
        
    </div>
  )
}

export default Card