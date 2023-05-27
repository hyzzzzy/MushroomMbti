import React from 'react';
import { useNavigate } from "react-router-dom";
import { AdfitBannerAd } from './AdFitBanner.js';
import styled from 'styled-components';
import * as Layout from './Layout.js';

function Main(props) {
  const navigate = useNavigate();
  return (
    <Layout.MainContainer>
      <Layout.Title>당신은 어떤 버섯일까요?</Layout.Title>
      <Layout.SubTitle>&#x1F344;버섯 MBTI 테스트&#x1F344;</Layout.SubTitle>
      <Layout.Image src='/images/sample.png' alt='버섯 MBTI 테스트'></Layout.Image>
      <Layout.Button
        onClick={() => {
          navigate("/test");
          props.setEI(0);
          props.setSN(0);
          props.setTF(0);
          props.setJP(0);
        }}
      >
        시작하기
      </Layout.Button>
      <Description>개발: 신혜지, 그림: 송해인</Description>
      <AdfitBannerAd></AdfitBannerAd>
    </Layout.MainContainer>
  );
}

const Description = styled.div`
  margin-top: 10px;
  font-size: 0.7rem;
  color: #868e96;
`;

export default Main;
