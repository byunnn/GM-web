import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import cellphone_image from './home_second.png'

import { PAGES } from '../../Shared/Misc/Enums';

const HomeSecond = ({ handleClick}) => {


    return (
        <>
            <Row style={{
                width: "100%",
                height: "90%"
            }}>

                <Col xs={4} md={5} style={{
                    marginTop: '15rem'
                }}>
                    <img
                        id="cellphone_image"
                        src={cellphone_image}
                        alt="cellphone_image"/>
                </Col>

                <Col xs={6} md={7} >
                    <div className="rectangle" style={{ position: "relative" }}>

                        <div className='home_second_child' style={{ position: "absolute" }}>

                            <Row >
                                <h1 className='head1' style={{ color: 'white' }}>Get started with synthetic data in less than five minutes.</h1>
                            </Row>

                            <Row >
                                <p className='head4 mt-4' style={{ color: 'white' }}> Generate accurate and safe data, on demand.</p>
                            </Row>

                            <Row >
                                <Button 
                                variant="light" 
                                size="lg" 
                                className='mt-4'
                                onClick={()=>handleClick(PAGES.GENERATION, PAGES.GENERATION.pageIndex)}>
                                    Start for free
                                </Button>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>

        </>
    );
};

export default HomeSecond;
