import React from 'react'
import  Button from "../Button"
import './styleMember.css'
import { useState } from 'react'
import Edit from './edit'



const Members = () => {

  const [deleteId,setDeleteId] = useState(false)

  const handleDelete = () => {

    if(localStorage.getItem("id") !== 0){
      setDeleteId(true);
    }
  }
  
   

  return (
     
    <div>
    
  
    {deleteId ? 
    
    <h3 className='shadow p-3 mb-5 bg-body-tertiary rounded'>No members in the database</h3> 
  
    :
          <div className='Members'>
            <img src={localStorage.getItem('picture')} >
            </img>

           <div className='Title'>
            <p>{localStorage.getItem("nameF")}</p>
            <p>{localStorage.getItem("job")}</p>
            </div>

            
            <div className='icons'>
            <i class="fa-regular fa-trash-can" onClick={handleDelete}></i>
            <i class="fa-solid fa-pen"></i>
            </div>
     </div>
      }
    </div>
  )
}

export default Members