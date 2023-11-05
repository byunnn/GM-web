import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import DashboardTable from './DashboardTable';
import axios from 'axios';
import './Dashboard.css';


const Dashboard = ({ setPage, setPageNum }) => {

  const projectData = [
    {
      "project" : "project 1",
      "createdDate" : '2023.01.02',
      "requestedDate" : '2023.01.01',
      "sizeDataset" : '500MB'
    }
  ]

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
        <h1 className="head2">dashboard</h1>
      </Row>

      {data ? <div className='table-container'>
        <DashboardTable
          tableBody={projectData} />
      </div> : null}
    </div>
  );
};

export default Dashboard;

