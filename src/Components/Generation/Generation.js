import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';

import axios from 'axios';

import './Generation.css';


const Generation = ({ setPage, setPageNum }) => {

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageFormData, setImageFormData] = useState(new FormData());

  const setPreview = (e) => {

    if (e.target.files) {
      const files = e.target.files;
      console.log("files 확인", files)
      const formData = new FormData();

      //Update formDate
      for (let i = 0; i < files.length; i++) {
        formData.append('image', files[i]);
      }

      //Update list
      setSelectedFiles([...files]);
      setImageFormData(formData);


    }
  };

  const sendText = () => {
    const endpoint = "home"
    axios.get(process.env.REACT_APP_API_URL + endpoint, {
      params: {
        email : "abc@naver.com",
        content: "Hi"
      }
    }).then((Response) => {
      console.log(Response);
    }).catch((Error) => {
      console.log(Error);
    })
  }

  //get products list from the store
  const sendData = () => {

    const formData = new FormData();
    // Add each selected file to the FormData
    for (const file of selectedFiles) {
      formData.append('zip', file);
      console.log("file", file)
    }

    console.log("selectedFiles", selectedFiles)
    // FormData의 key 확인
    for (let values of formData.values()) {
      console.log("values 확인", values);
    }
    const endpoint = 'upload/image'
    axios.post(process.env.REACT_APP_API_URL + endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": '*',
      },
    }).then((Response) => {
      console.log("Response : ", Response)
    }).catch((Error) => {
      console.log(Error);
    })
  }

  return (
    <div className='url-container'>
      <Row className="text-center">
        <h2 className="head1">Please drag and drop or upload an image</h2>
      </Row>

      <Row className='text-center mt-4'>
        <h3 id="head3">Experience your new data creation!</h3>
      </Row>

      <Row>
        <div className='image-container'>
          <input
            type='file'
            accept='image/jpg,image/png,image/jpeg,image/gif,application/zip'
            name='profile_img'
            onChange={setPreview}
            multiple
          />
        </div>
      </Row>

      <ul>
        {selectedFiles.length > 0 &&
          selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
      </ul>

      {selectedFiles.length > 0 &&
        <Button onClick={sendData}>Generate</Button>}
    </div>

  );
};

export default Generation;

