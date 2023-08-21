import React , {useState, useEffect} from 'react'
import './Button.css';
import Uploader from './Components/Uploader';
import Members from './Components/Members'


const Button = () => {

const [isFormVisible, setIsFormVisible] = useState(false)
const [nameF , setNamef] = useState('')
const [ job , setJob] = useState('')
const [image, setImage] = useState()


function addData () {
  
  const numItems = localStorage.length;
  const userId = numItems + 1;
  
  localStorage.setItem('id', userId);
  localStorage.setItem('nameF',nameF);
  localStorage.setItem('job', job);

 
  
}

const toggleForm = () => {

    setIsFormVisible(!isFormVisible);
    
}


  return (
    <div>
    {isFormVisible ?<i className="fa-solid fa-arrow-left-long" onClick={toggleForm}></i> : ""}
    {!isFormVisible ? <button onClick={toggleForm} >Add Member</button>  : ""}
    {!isFormVisible ? <Members /> : ""}
    {isFormVisible && (
 
 
        <form>
            <Uploader />
            <div className='input-info'>
            <input className='shadow p-3 mb-5 bg-body-tertiary rounded'
             id='nameF' type="text" placeholder='Full names' 
              onChange={(e) => { setNamef(e.target.value)}}/>
            <br />
            <input className='shadow p-3 mb-5 bg-body-tertiary rounded'
             id='job' type="text" placeholder='Job tiltle' 
             onChange={(e) => {setJob(e.target.value)}} />
            <br />
            <button style={{ marginLeft: 550, marginTop: 30 }}  onClick={addData}>Submit</button>
            </div>
        </form>
    )

}
    
    </div>
  )
}

export default Button