import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Form } from 'react-bootstrap';

import axios from 'axios';

import { PAGES } from '../../Shared/Misc/Enums';
import ModelProgress from './ModelProgress';
import './Generation.css';


const Generation = ({ setPage, setPageNum }) => {

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageFormData, setImageFormData] = useState(new FormData());
  const [sendCheck, setSendCheck] = useState(false)
  const [projectName, setProjectName] = useState('');
  const [modelRunning, setModelRunning] = useState(false)
  const [webSocketClosed, setWebSocketClosed] = useState(true)
  const [metrics, setMetrics] = useState('')

  const changePage = (pageName, pageNum) => {
    setPage(pageName);
    setPageNum(pageNum);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    const formData = new FormData();

    // Update formData
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }

    // Update list
    setSelectedFiles([...files]);
    setImageFormData(formData);
  };

  // const getModelState = () => {
  //   const email = 'test@gmail.com'
  //   const endpoint = `members/status/${email}`
  //   axios.get(process.env.REACT_APP_API_URL + endpoint, {
  //   }).then((Response) => {
  //     console.log(" 모델 상태 요청 - getModelState", Response)

  //     if (Response.data === 'generating') {
  //       setModelRunning(true)
  //       setWebSocketClosed(false)
  //     }
  //   }).catch((Error) => {
  //     console.log(Error);
  //   })
  // }

  // useEffect(() => {
  //   getModelState();
  // }, [sendCheck]);

  // const getModelProgress = () => {
  //   const email = 'test@gmail.com'
  //   const endpoint = `members/progress/status/${email}`
  //   axios.get(process.env.REACT_APP_API_URL + endpoint, {
  //   }).then((Response) => {
  //     console.log("Response-getModelProgress: ", Response)
  //     if (Response.data === 'closed') {
  //       setWebSocketClosed(true)
  //       setModelRunning(false)
  //       setSendCheck(false)
  //       setMetrics('')
  //     }
  //     else {
  //       const responseString = Response.data; // Assuming Response.data is a string
  //       const extractedValues = responseString.split(/\s+/); // Splitting by one or more whitespaces
  //       setMetrics(extractedValues);

  //     }
  //     console.log("metrics", metrics);
  //   }).catch((Error) => {
  //     console.log(Error);
  //   })
  // }

  // const intervalIdRef = useRef();

  // useEffect(() => {
  //   if (modelRunning === true && webSocketClosed === false) {
  //     intervalIdRef.current = setInterval(() => {
  //       getModelProgress();
  //     }, 10000);
  //   }

  //   if (webSocketClosed === true) {
  //     clearInterval(intervalIdRef.current);
  //   }

  // }, [modelRunning, webSocketClosed]);


  const setPreview = (e) => {
    console.log("project Name", projectName)
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



  //get products list from the store
  const handleClick = () => {
    setSendCheck(true);
    sendData()
    // getModelState()
    // setTimeout(() => {
    //   setSendCheck(true);
    // }, 3000);
  }
  const sendData = () => {


    const email = "test@gmail.com"
    const formData = new FormData();

    formData.append('email', email);
    formData.append('projectName', projectName);

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
    const endpoint = `upload/images/${email}`;
    console.log(endpoint)
    axios.post(process.env.REACT_APP_API_URL + endpoint, formData, {

      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": '*',
      }
    }).then((Response) => {
      console.log("Response : ", Response)
    }).catch((Error) => {
      console.log(Error);
    })
  }

  return (

    <div className='url-container'
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}>
      {modelRunning === false && (
        <>
          {sendCheck ? (
            <div>
              <h1>Your data has been successfully sent!</h1>
              <h2>We are currently processing your data and generating images. <br /> When your model is ready to start, The process of training models will be displayed in *** page shortly.</h2>
              <h2>You can monitor the progress of the process in real-time.</h2>

              <button className='btn-bw' onClick={() => changePage(PAGES.DASHBOARD, PAGES.DASHBOARD.pageIndex)}>Go to monitor the progress</button>

            </div>
          ) :
            (
              <div>
                <Row className="text-center">
                  <h2 className="head1">Please drag and drop or upload an image</h2>
                </Row>

                <Row className='text-center mt-4'>
                  <h3 id="head3">Experience your new data creation!</h3>
                </Row>

                <div className='fileBox'>

                  {/* <input
                    type='text'
                    placeholder='Enter Project Name'
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  /> */}
                  <Row>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Project name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="project name"
                          onChange={(e) => setProjectName(e.target.value)}
                        />
                      </Form.Group>
                    </Form>
                  </Row>

                  <Row>
                    {/* <div className='image-container'>
                      <input
                        type='file'
                        accept='image/jpg,image/png,image/jpeg,image/gif,application/zip'
                        name='profile_img'
                        onChange={setPreview}
                        multiple
                      />
                    </div> */}
                    <div
                      className="image-container"
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      <input
                        type="file"
                        accept="image/jpg,image/png,image/jpeg,image/gif,application/zip"
                        name="profile_img"
                        onChange={setPreview}
                        multiple
                      />
                    </div>
                  </Row>
                </div>

                <div className='listContainer'>

                  <ul>
                    {selectedFiles.length > 0 &&
                      selectedFiles.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                  </ul>

                  {selectedFiles.length > 0 &&
                    <Button onClick={handleClick}>Generate new dataset</Button>}
                </div>

              </div>
            )}
        </>

      )}

      {/* {(modelRunning === true  && webSocketClosed === false) &&
        // When model is running
        (<div>
          <ModelProgress
            metrics={metrics} />
        </div>

        )} */}



    </div>

  );
};

export default Generation;

