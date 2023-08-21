import React, { useState } from 'react';
import './StylUpload.css';
import Members from './Members';




function Uploader() {
 
  const [selectedFile, setSelectedFile] = useState('null');
  

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataUrl = e.target.result;
        setSelectedFile(dataUrl);
        localStorage.setItem('picture',dataUrl);
      };

      reader.readAsDataURL(file);
    }

    const HandleUpload = (picVal) => {picVal = false};

  };
  
  
  return (
          
    <div className='imgInput'>
     
 
     <div className='Cirle' ><i class="fa-regular fa-image"></i></div>
     <p>+</p>
     {selectedFile && (

        <div className='Container-img'>
              
          <img id='picture'
            src={selectedFile}
          />
       
        </div>)}
        
        <input  type="file" accept="image/*" onChange={handleFileChange} />
      
    </div>
  );
}



export default Uploader;