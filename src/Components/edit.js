import React, { useState } from 'react';
import Uploader from './Uploader';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const [nameF, setNameF] = useState(localStorage.getItem('nameF') || '');
  const [job, setJob] = useState(localStorage.getItem('job') || '');
  const [image, setImage] = useState();

  
   const navigate = useNavigate();

  const handleName = (event) => {
    setNameF(event.target.value);
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
    localStorage.setItem('nameF', nameF);
    localStorage.setItem('job', job);
    navigate("/");

  };

  return (
    <div>
      <form>
        <Uploader onChange={handleFile} />
        <div className='input-info'>
          <input
            className='shadow p-3 mb-5 bg-body-tertiary rounded'
            id='nameF'
            type='text'
            placeholder='Full names'
            value={nameF}
            onChange={handleName}
          />
          <br />
          <input
            className='shadow p-3 mb-5 bg-body-tertiary rounded'
            id='job'
            type='text'
            placeholder='Job title'
            value={job}
            onChange={handleJob}
          />
          <br />
          <button style={{ marginLeft: 550, marginTop: 30 }} onClick={handleEdit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
