// Loading.js
import React from 'react';
import {Background, LoadingText} from './Styles';
import Spinner from './spinner.gif';

const Loading = () => {
  return (
    <Background>
      <LoadingText>분석중</LoadingText>
      <img src={Spinner} alt="Loading" width="5%" />
    </Background>
  );
};

export default Loading;