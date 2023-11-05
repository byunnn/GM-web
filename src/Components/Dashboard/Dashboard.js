import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

import axios from 'axios';

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


import './Dashboard.css';

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


const Dashboard = ({ setPage, setPageNum }) => {
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

    // //get products list from the store
    // const getProduct = () => {
    //   const endpoint = 'mystore/products'
    //   axios.get(process.env.REACT_APP_API_URL + endpoint, {
    //     params: {
    //       url: storeUrl
    //     }
    //   }).then((Response) => {
    //     console.log("스토어 상품 from server : ", Response)
    //     setProductList(Response.data.myProducts)
    //   }).catch((Error) => {
    //     setLoading(false)
    //     console.log(Error);
    //   })
    // }

  return (
    <div className='dashboard-container'>
      <Row className="text-center mt-3">
        <h1 className="head2">Project num.2 dashboard</h1>
      </Row>

      <Row className="text-center mt-3">
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
      </Row>

      <Row className="text-center mt-3">
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
      </Row>

    </div>
  );
};

export default Dashboard;
