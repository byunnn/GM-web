import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import GeneratedFileTable from './GeneratedFileTable';
// import Loading from '../../Shared/Loading/Loading'
import sampleFile from '../../data/sampleFile.zip'
import './Overview.css';


const Overview = ({ setPage, setPageNum }) => {
  const [generatedFile, setGeneratedFile] = useState(false)
  // const [loading, setLoading] = useState(false);

  //get products list from the store
  const getGeneratedFile = () => {
    const endpoint = 'rendering'
    axios.get(process.env.REACT_APP_API_URL + endpoint, {
      params: {
        id: 1
      }
    }).then((Response) => {
      // setLoading(false)
      console.log("Response: ", Response)
      setGeneratedFile(Response.data)

    }).catch((Error) => {
      // setLoading(false)
      console.log(Error);
    })
  }

  

  return (
    <div>
      {/* {loading ? <Loading /> : null} */}

      <Button
        variant="outline-dark"
        onClick={() => getGeneratedFile()}>
        상품 분석하기
      </Button>

      {mockdata ? <div className='table-container'>
        <h5 className='mb-4'> 데이터 생성 이력</h5>
        <GeneratedFileTable
          tableBody={mockdata} />
      </div> : null}
    </div>
  );
};

export default Overview;


const mockdata = [
  {
    "project" : "project 1",
    "createdDate" : '2023.01.02',
    "requestedDate" : '2023.01.01',
    "sizeDataset" : '500MB',
    "file" : sampleFile
  },
  {
    "project" : "project 2",
    "createdDate" : '2023.01.02',
    "requestedDate" : '2023.01.01',
    "sizeDataset" : '500MB',
    "file" : sampleFile
  },
  {
    "project" : "project 3",
    "createdDate" : '2023.01.02',
    "requestedDate" : '2023.01.01',
    "sizeDataset" : '500MB',
    "file" : sampleFile
  },
];