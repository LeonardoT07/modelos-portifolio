import styled, { css } from 'styled-components';

const DisplayFlexColumn = css`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const DisplayFlexRow = css`
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;
    align-items: flex-start;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1080px;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;

    ${({ flexRow }) => {
    if (flexRow) {
      return DisplayFlexRow;
    }
    return DisplayFlexColumn;
  }}
`;
