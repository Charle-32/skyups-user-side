import React from 'react';
import styled from 'styled-components';

const TitleWrap = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

interface PageTitleProps {
    title: string;
}

const PageTitle : React.FC<PageTitleProps> = ({ title }) => {
  return (
    <TitleWrap>{title}</TitleWrap>
  );
}

export default PageTitle;
