import React, { useState, useEffect } from 'react';
import {  Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import GeneratedFileTable from './GeneratedFileTable';
import sampleFile from '../../data/sampleFile.zip'
import DashBoardModal from './DashBoardModal';
import ad1 from './src/ad1.png'
import './History.css';

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

const History = ({ setPage, setPageNum }) => {
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
            <h1 className="head2 text-center">💡 My data generation histoy 💡</h1>

            <GeneratedFileTable
              tableBody={projectList}
              handleShow={handleShow} />
          </div> : null}


      </div>
      <div className='dashboard-container'>
          <Row className="mt-4 mb-4">
          <Col sm={4} md={4}>
            <Card style={{ width: '23rem' }}>
              <Card.Img variant="top" src={ad1} />
              <Card.Body>
                <Card.Title>대한민국 소프트웨어대전, 소프트웨이브 2023
                </Card.Title>
                <Card.Text>
                  소프트웨이브는 대한민국을 대표하는 소프트웨어-ICT 비즈니스 박람회입니다.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://www.k-softwave.com/" target="_blank" rel="noopener noreferrer">
                  사이트 바로가기
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} md={4}>
            <Card style={{ width: '23rem' }}>
              <Card.Img variant="top" src={ad1} />
              <Card.Body>
                <Card.Title>대한민국 소프트웨어대전, 소프트웨이브 2023
                </Card.Title>
                <Card.Text>
                  소프트웨이브는 대한민국을 대표하는 소프트웨어-ICT 비즈니스 박람회입니다.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://www.k-softwave.com/" target="_blank" rel="noopener noreferrer">
                  사이트 바로가기
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>


          <Col sm={4} md={4}>
            <Row className="mb-4">
              <Card>
                <Card.Header>희귀 데이터 생성 플랫폼 GM</Card.Header>
                <Card.Body>
                  <Card.Title>대한민국을 대표하는 소프트웨어-ICT 비즈니스 박람회을 뒤흔들다.</Card.Title>
                  <Card.Text>
                    생성 AI 기술을 활용하여 원본 데이터와 아주 유사한, 고품질의 새로운 생성 데이터를 제공 플랫폼
                  </Card.Text>
                  <a href='https://www.notion.so/GM-Generated-Medical-GM-f20d80d8b36a4bf190dbff9c8922596d?pvs=4/' target="_blank" rel="noopener noreferrer">바로가기</a>
                </Card.Body>
              </Card>
            </Row>

            <Row>
              <Card>
                <Card.Header>대한민국 소프트웨어대전, 소프트웨이브 2023</Card.Header>
                <Card.Body>
                  <Card.Title>2023년 11월 29일 ~ 2023년 12월 1일</Card.Title>
                  <Card.Text>
                    대한민국을 대표하는 소프트웨어-ICT 비즈니스 박람회.
                  </Card.Text>
                  <a href='https://www.k-softwave.com/' target="_blank" rel="noopener noreferrer">바로가기</a>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
        </div>
    </div>
  );
};

export default History;


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