import React from 'react';
import YouTube from 'react-youtube';
import { Button, Row, Col, Table } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import ad1 from './src/ad1.png'
import './ModelProgress.css';


const ModelProgress = ({ metrics}) => {

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

        <Col md={8}>
          <YouTube
            videoId={"j0pAXXFTJKo"}
            opts={{
              width: "1120",
              height: "630",
              playerVars: {
                autoplay: 1, 
                rel: 0,
                modestbranding: 1, 
              },
            }}
            onEnd={(e) => { e.target.playVideo(); }}
          />
        </Col>
        <Col md={4}>
          <div className="metircsContrainer">
            <Table responsive striped bordered hover size="lg">
            <thead >
                <p style={{ fontSize: '20px', fontStyle: 'italic', fontFamily: 'bold'}}>Your model is currently...</p>
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
        <Col md={4}>
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
              <Card.Link href="https://www.k-softwave.com/">사이트 바로가기</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
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
              <Card.Link href="https://www.k-softwave.com/">사이트 바로가기</Card.Link>
            </Card.Body>
          </Card>
        </Col>


        <Col md={4}>
          <Row className="mb-4">
            <Card>
              <Card.Header>대한민국 소프트웨어대전, 소프트웨이브 2023</Card.Header>
              <Card.Body>
                <Card.Title>2023년 11월 29일 ~ 2023년 12월 1일</Card.Title>
                <Card.Text>
                  대한민국을 대표하는 소프트웨어-ICT 비즈니스 박람회.
                </Card.Text>
                <a href='https://www.k-softwave.com/'>바로가기</a>
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
                <a href='https://www.k-softwave.com/'>바로가기</a>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>

    </div>
  );
};

export default ModelProgress;

