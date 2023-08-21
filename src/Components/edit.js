import React, { useEffect, useState } from 'react'
import Members from './Members'
import Uploader from './Uploader'




const Edit = () => {

    const [editId, setEditId] = useState()
    const [nameF , setNamef] = useState('')
    const [ job , setJob] = useState('')
    const [image, setImage] = useState()
    const [iD, setID]  = useState()

 


    
     const handleName = (event) => {
        setNamef(event.target.value);
       };

      const handleJob = (event) => {
        setJob(event.target.value);
       };
  
        const handleFile = (event) => {
         const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
        const dataUrl = e.target.result;
        setImage(dataUrl);
      };


      reader.readAsDataURL(file);
    }
  };

     const handleEdit = (event) => {

        localStorage.setItem(setID,JSON.stringify({
              picture: image,
              nameF: nameF,
              job: job,
            })
   
        
    );
   
  };



  return (
    <div>
        <form>
            <Uploader onChange={handleFile} />
            <div className='input-info'>
            <input className='shadow p-3 mb-5 bg-body-tertiary rounded'
             id='nameF' type="text" placeholder='Full names' 
              onChange={handleName}/>
            <br />
            <input className='shadow p-3 mb-5 bg-body-tertiary rounded'
             id='job' type="text" placeholder='Job tiltle' 
             onChange={handleJob} />
            <br />
            <button style={{ marginLeft: 550, marginTop: 30 }}  onClick={handleEdit}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Edit