import React, { useState, useEffect } from 'react';

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

const DashBoardModal = ({ show, handleClose, dashboard }) => {
  //accuracy[f, f, f], fid[f,f,f], lpips[f,f,f]

  const [singleImgaeUrl, setSingleImageUrl] = useState(dashboard.generated_single_img_url);
  const [gifUrl, setGifUrl] = useState(dashboard.generated_gif_url);
  const [lossUrl, setLossUrl] = useState(dashboard.loss);


  // 이미지를 가져오기 위한 함수
  const fetchImage = async (imageUrl, setImageUrl) => {
    try {
      const response = await fetch(imageUrl);
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } else {
        console.error('Failed to fetch image:', imageUrl);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  useEffect(() => {
    console.log("singleImgaeUrl", singleImgaeUrl)
    console.log("gifUrl", gifUrl)
    // 컴포넌트가 로드될 때 이미지를 가져옵니다.
    fetchImage(singleImgaeUrl, setSingleImageUrl);
    fetchImage(gifUrl, setGifUrl);
    fetchImage(lossUrl, setLossUrl);

  }, [gifUrl, lossUrl, singleImgaeUrl]);

  const fid = dashboard.fid
  const lpips = dashboard.lpips
  const acc_original = dashboard.accuracy_original_generated
  const acc_generated = dashboard.accuracy_generated


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

  const labels = ['original acc', 'generated acc', 'fid', 'lpips'];


  const colors = ['rgba(255, 99, 132, 0.5)',
    'rgba(53, 162, 235, 0.5)',
    'rgba(247, 180, 82, 0.5)',
    'rgba(201, 224, 82, 0.5)',
    'rgba(82, 247, 182, 0.5)']

  const data = {
    labels,
    datasets: [
      {
        label: 'Original data',
        data: [acc_original[0], acc_generated[0], fid[0], lpips[0] * 100],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Generated data',
        data: [acc_original[1], acc_generated[1], fid[1], lpips[1] * 100],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };



  return (
    <Modal
      dialogClassName="custom-modal"
      fullscreen="md-down"
      size="xl"
      show={show}
      onHide={handleClose}
      aria-labelledby="example-custom-modal-styling-title"
      centered>
      <Modal.Header closeButton>
        <Modal.Title> Dashboard : {dashboard.projectName} </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Container className="noPadding">
          <p className='h4 mb-4 mt-4'> </p>



          <Col>
          <h5>Original data로 분류한 정확도와 Generated data로 분류한 정확도를 비교해보세요!
                두 수치가 비슷할 수록, 좋은 데이터가 생성되었다는 것을 의미합니다.</h5>
                <p>lpips는 가시성을 위해 100배를 곱했습니다.</p>
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

          <Col>
            {singleImgaeUrl && (
              <img
                src={singleImgaeUrl}
                alt="Generated Single Image1"
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </Col>

          <Col>
            {gifUrl && (
              <img
                src={gifUrl}
                alt="Generated GIF"
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </Col>

          <Col>
            {lossUrl && (
              <img
                src={lossUrl}
                alt="Generated Single Image1"
                style={{ width: '100%', height: 'auto' }}
              />
            )}
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