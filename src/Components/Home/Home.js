import React from 'react';

import {SectionsContainer, Section} from 'react-fullpage';

import HomeFirst from './HomeFirst';
import HomeSecond from './HomeSecond'
import HomeThird from './HomeThird'

import './Home.css';


const Home = ({ setPage, setPageNum }) => {

  const handleClick = (pageName, pageNum) => {
    setPage(pageName);
    setPageNum(pageNum);
  };

    let options = {
        activeClass:          'active', // the class that is appended to the sections links
        anchors: ['sectionOne', 'sectionTwo', 'sectionThree'], // the anchors for each sections
        arrowNavigation:      true, // use arrow keys
        className:            'SectionContainer', // the class name for the section container
        delay:                800, // the scroll animation speed
        navigation:           true, // use dots navigatio
        scrollBar:            false, // use the browser default scrollbar
        sectionClassName:     'Section', // the section class name
        sectionPaddingTop:    '0', // the section top padding
        sectionPaddingBottom: '0', // the section bottom padding
        verticalAlign:        false // align the content of each section vertical
      };

    return (
      <>
        <SectionsContainer {...options}>
            <Section> <HomeFirst handleClick={handleClick}/></Section>
            <Section><HomeSecond handleClick={handleClick}/></Section>
            <Section><HomeThird handleClick={handleClick}/></Section>
        </SectionsContainer>
      </>
    );
  };

export default Home;
