import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import GeneratedFileTable from './GeneratedFileTable';
// import Loading from '../../Shared/Loading/Loading'
import sampleFile from '../../data/sampleFile.zip'
import DashBoardModal from './DashBoardModal';
import './Overview.css';


const Overview = ({ setPage, setPageNum }) => {
  const [generatedFile, setGeneratedFile] = useState(false)
  const [productId, setProductId] = useState(false)
  const [productName, setProductName] = useState(false)
  // const [loading, setLoading] = useState(false);


  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setProductId(false)
    setProductName(false)
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }

  //프로젝트 리스트 받아오기 (프로젝트 이름, url, 수치들 )
  //get products list from the store
  const getGeneratedFile = () => {
    const email = 'test@gmail.com'
    const endpoint = `zips/${email}`
    axios.get(process.env.REACT_APP_API_URL + endpoint, {
    }).then((Response) => {
      // setLoading(false)
      console.log("Response: ", Response)
      console.log(Response.data)
      // setGeneratedFile(Response.data)

    }).catch((Error) => {
      // setLoading(false)
      console.log(Error);
    })
  }



  return (
    <div>
      {/* {loading ? <Loading /> : null} */}

      {mockdata ? <DashBoardModal
        show={show}
        handleClose={handleClose}
        dashboard={mockdata} /> : null}

      <Button
        variant="outline-dark"
        onClick={() => getGeneratedFile()}>
        데이터 요청
      </Button>

      {mockdata ? <div className='table-container'>
        <h5 className='mb-4'> 데이터 생성 이력</h5>
        <GeneratedFileTable
          tableBody={mockdata}
          handleShow={handleShow} />
      </div> : null}
    </div>
  );
};

export default Overview;


const mockdata = [
  {
    "project": "project 1",
    "createdDate": '2023.01.02',
    "requestedDate": '2023.01.01',
    "sizeDataset": '500MB',
    "file": sampleFile
  },
  {
    "project": "project 2",
    "createdDate": '2023.01.02',
    "requestedDate": '2023.01.01',
    "sizeDataset": '500MB',
    "file": sampleFile
  },
  {
    "project": "project 3",
    "createdDate": '2023.01.02',
    "requestedDate": '2023.01.01',
    "sizeDataset": '500MB',
    "file": sampleFile
  },
];