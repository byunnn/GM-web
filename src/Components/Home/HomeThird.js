import React from 'react';
import { Row,  Button } from 'react-bootstrap';

import info_bar from './info_bar.png';

import { PAGES } from '../../Shared/Misc/Enums';


const HomeThird = ({ handleClick}) => {


    return (
        <>
            <Row id='home-third-first-row'>
                <div className='text-center'>
                    <h1 className='head2' style={{ color: 'black' }}>We guarantee our data.</h1>
                    <h3 className='head3' style={{ color: 'black' }}>Gretel’s APIs make it simple to generate anonymized and safe synthetic data 
                    so you can innovate faster and preserve privacy while doing it.</h3>
                </div>
            </Row>

            <Row id='home-third-second-row'>
                <img
                    className='bar_image'
                    src={info_bar}
                    alt="home_third_image"
                />

            </Row>

            <Row md={3} id='home-third-third-row' className="justify-content-center">        
                <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={() => handleClick(PAGES.DASHBOARD,PAGES.DASHBOARD.pageIndex )}>
                    Explore dashboards
                </Button>

            </Row>
        </>
    );
};

export default HomeThird;
