import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import GeneratedFileTable from './GeneratedFileTable';
// import Loading from '../../Shared/Loading/Loading'
import sampleFile from '../../data/sampleFile.zip'
import DashBoardModal from './DashBoardModal';
import './Overview.css';

const mockProjectList = [
  {
    "accuracy": [1, 2],
    "fid": [1, 2],
    "lpips": [1, 2],
    "id": 2,
    "member": [],
    "projectName": "project 1",
    "zipUrl": "sample url",
    "createdDate": "2020"



  },
]

const Overview = ({ setPage, setPageNum }) => {
  const [projectList, setProjectList] = useState(mockProjectList) //useState(false)
  const [dashboardData, setDashboardData] = useState(false)
  // const [loading, setLoading] = useState(false);


  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setDashboardData(false)
    setShow(false);
  }
  const handleShow = (project) => {
    setDashboardData(project)
    setShow(true);
  }



  //프로젝트 리스트 받아오기 (프로젝트 이름, url, 수치들 )
  //get products list from the store
  //accuracy, fid, id, lpips, member{email,pw}, projectName, zipUrl
  const getGeneratedFile = () => {
    const email = 'test@gmail.com'
    const endpoint = `zips/${email}`
    axios.get(process.env.REACT_APP_API_URL + endpoint, {
    }).then((Response) => {
      // setLoading(false)
      console.log("Response: ", Response)
      setProjectList(Response.data)

    }).catch((Error) => {
      // setLoading(false)
      console.log(Error);
    })
  }

  useEffect(() => {
    getGeneratedFile();
  }, []);

  return (
    <div className='page-container'>

      {dashboardData ? <DashBoardModal
        show={show}
        handleClose={handleClose}
        dashboard={dashboardData} /> : null}

      <div className='component-container'>
        {projectList ?
          <div className='table-container'>
            <h1 className="head2 text-center">데이터 생성 이력</h1>

            <GeneratedFileTable
              tableBody={projectList}
              handleShow={handleShow} />
          </div> : null}


      </div>

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