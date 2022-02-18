import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TagH1 = css`
    font-size: 30px;
`;

const TagH3 = css`
    font-size: 1.6em;
`;

export const TitlePageWrapper = styled.h1`
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.3em;

    ${({ tagH3 }) => {
    if (tagH3) {
      return TagH3;
    }
    return TagH1;
  }}
`;

export default function TitlePage({ children }) {
  return (
    <header>
      <TitlePageWrapper>
        {children}
      </TitlePageWrapper>
    </header>
  );
}

TitlePage.propTypes = {
  children: PropTypes.node.isRequired,
};
