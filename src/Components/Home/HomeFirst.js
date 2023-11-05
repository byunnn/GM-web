import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './home_first_sample1.png';

import { PAGES } from '../../Shared/Misc/Enums';


const HomeFirst = ({ handleClick }) => {

    return (
        <>
            <Container id='main_container'>
                <Row >
                    <Col xs={6} md={6} className='d-flex flex-column ml-4'>
                        <h1 className='head1'>Are you still struggling with a lack of data?</h1>
                        <h5 className='mt-4'>
                            Our platform offers more than just generating data.
                            <br/>We also provide tools and dashboards to improve the quality of augmented medical data..
                        </h5>
                        <button className='btn-bw' onClick={() => handleClick(PAGES.OVERVIEW, PAGES.OVERVIEW.pageIndex)}>Overview</button>
                    </Col>

                    <Col xs={6} md={6} className='d-flex flex-column justigy-content-end ml-3'>
                        <img
                            className="sample_img1"
                            src={logo}
                            alt="sample img1" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomeFirst;
