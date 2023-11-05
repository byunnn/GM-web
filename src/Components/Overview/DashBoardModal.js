import React from 'react';

import { Container, Modal, Button, Row, Col } from 'react-bootstrap';


import {
  /* Bar Chart */
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  /* Radar Chart */
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';


ChartJS.register(
  /* Bar Chart */
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  /* Radar Chart */
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
);

const DashBoardModal = ({ show, handleClose, projectName, dashboard  }) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Accuracy',
      },
    },
  };

  const labels = ['class 1', 'class 2', 'class 3', 'class 4', 'class 5', 'class 6', 'class 7'];


  const colors = ['rgba(255, 99, 132, 0.5)', 
  'rgba(53, 162, 235, 0.5)',
   'rgba(247, 180, 82, 0.5)', 
   'rgba(201, 224, 82, 0.5)', 
   'rgba(82, 247, 182, 0.5)']
  const fieldsToExtract = ['price', 'delivery_price', 'product_amount', 'review', 'review_score', 'heart'];


  const data = {
    labels,
    datasets: [
      {
        label: 'Synthetic',
        data: [11, 5, 2, 8, 3, 6, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Original',
        data: [7, 3, 8, 2, 9, 1, 7],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };



  return (
    <Modal
      dialogClassName="custom-modal"
      fullscreen="md-down"
      show={show}
      onHide={handleClose}
      aria-labelledby="example-custom-modal-styling-title"
      centered>
      <Modal.Header closeButton>
        <Modal.Title>내 대시보드</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Container className="noPadding">
          <p className='h4 mb-4 mt-4'> </p>
          <p className='mt-4'>{projectName}</p>

          <Col>
          <div style={{ height: "40rem", position: "relative", margin: "1%", padding: "1%" }}>
            <Bar options={options}
              width={"15rem"}
              height={"15rem"}
              data={data} />
          </div>
        </Col>

        <Col>
          <div style={{ height: "40rem", position: "relative", marginBottom: "1%", padding: "1%" }}>
            <Radar data={data} />
          </div>
        </Col>

        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DashBoardModal;