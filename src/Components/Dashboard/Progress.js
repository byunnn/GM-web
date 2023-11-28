import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { Button, Row, Col, Table } from 'react-bootstrap';

import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { PAGES } from '../../Shared/Misc/Enums';
import ad1 from './src/ad1.png'
import './Progress.css';



const Progress = ({ setPage, setPageNum }) => {

  const [modelRunning, setModelRunning] = useState(false)
  const [webSocketClosed, setWebSocketClosed] = useState(true)
  const [metrics, setMetrics] = useState('')

  const changePage = (pageName, pageNum) => {
    setPage(pageName);
    setPageNum(pageNum);
  };

  const getModelState = () => {
    const email = 'test@gmail.com'
    const endpoint = `members/status/${email}`
    axios.get(process.env.REACT_APP_API_URL + endpoint, {
    }).then((Response) => {
      console.log(" 모델 상태 요청 - getModelState", Response)

      if (Response.data === 'generating') {
        setModelRunning(true)
        setWebSocketClosed(false)
      }
    }).catch((Error) => {
      console.log(Error);
    })
  }

  const getModelProgress = () => {
    const email = 'test@gmail.com'
    const endpoint = `members/progress/status/${email}`
    axios.get(process.env.REACT_APP_API_URL + endpoint, {
    }).then((Response) => {
      console.log("Response-getModelProgress: ", Response)
      if (Response.data === 'closed') {
        setWebSocketClosed(true)
        setModelRunning(false)
        setMetrics('')
      }
      else {
        const responseString = Response.data;
        const extractedValues = responseString.split(/\s+/);
        setMetrics(extractedValues);

      }
      console.log("metrics", metrics);
    }).catch((Error) => {
      console.log(Error);
    })
  }

  useEffect(() => {
    getModelState()
  }, []);

  const intervalIdRef = useRef();

  useEffect(() => {
    if (modelRunning === true && webSocketClosed === false) {
      intervalIdRef.current = setInterval(() => {
        getModelProgress();
      }, 10000);
    }

    if (webSocketClosed === true) {
      clearInterval(intervalIdRef.current);
    }

  }, [modelRunning, webSocketClosed]);


  if (!modelRunning && webSocketClosed) {
    return (
      <div>
      <div className='component-container'>

        <Row className="text-center mt-3">

          <h1 className="head1">😭 There are no projects in progress 😭</h1>
          <h1> <br /></h1>

        </Row>

        <Row>
        <h3 className="info-text">Can't see the progress even though you've started and submitted your project? 🤔</h3>
        <h3 className="info-text">It might be because your model is still getting ready. Please be patient, and check back in a few minutes</h3>
          <h3 className="info-text">If you haven't started any projects yet, now's the perfect time to generate and get an amazing new dataset! 🚀 </h3>

        </Row>
        <div className="button-container d-flex justify-content-center">
          <button className='btn-bw' onClick={() => changePage(PAGES.GENERATION, PAGES.GENERATION.pageIndex)}>Go to start your project</button>

        </div>

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
    )
  }

  if (modelRunning) {
    return (
      <div className='dashboard-container'>
        <Row className="text-center mt-3">

          <h1 className="head2 mb-4">We are working hard on your data 🥰</h1>
          <h1> </h1>
          <h1> </h1>
          <h1> </h1>
          <h1> </h1>
        </Row>


        <Row mb-4>

          <Col sm={8} md={8}>
            <YouTube
              videoId={"j0pAXXFTJKo"}
              opts={{
                width: "1120",
                height: "630",
                playerVars: {
                  autoplay: 1, //자동재생 O
                  rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                  modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                },
              }}
              onEnd={(e) => { e.target.playVideo(); }}
            />
          </Col>
          <Col sm={4} md={4}>
            <div className="metircsContrainer">
              <Table responsive striped bordered hover size="lg">
                <thead >
                  <p style={{ fontSize: '20px', fontStyle: 'italic', fontFamily: 'bold' }}>Your model is currently...</p>
                </thead>
                <tbody>
                  <tr>
                    <td>Total epoch</td>
                  </tr>
                  <tr>
                    <td>{metrics[0]}</td>
                  </tr>

                  <tr>
                    <td>Present epoch</td>
                  </tr>
                  <tr>
                    <td>{metrics[1]}</td>
                  </tr>


                  <tr>
                    <td>Percentage model training</td>
                  </tr>
                  <tr>
                    <td>{metrics[2]}%</td>
                  </tr>

                  <tr>
                    <td>Average time for one epoch</td>
                  </tr>
                  <tr>
                    <td>{metrics[3]} minutes</td>
                  </tr>


                  <tr>
                    <td>Estimated Time of Arrival</td>
                  </tr>
                  <tr>
                    <td>{metrics[4]} minutes</td>
                  </tr>

                </tbody>
              </Table>
              <ProgressBar animated now={metrics[2]} />
            </div>
          </Col>
        </Row>

        <Row className="mt-4 mb-4">
          <Col sm={4} md={4}>
            <Card style={{ width: '30rem' }}>
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
            <Card style={{ width: '30rem' }}>
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
    );
  };
}



export default Progress;

