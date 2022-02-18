import styled, { css } from 'styled-components';

const NavFlexRow = css`
    display: flex;
    flex-direction: row;
`;

export const NavigationWrapper = styled.nav`
    width: 100%;
    max-width: 1080px;
    margin: 0px 1% 30px 1%;
    padding: 10px 0px;

    border-bottom: 1px solid ${({ theme }) => theme.dark.background.contrast};
`;

NavigationWrapper.UnList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
        ${NavFlexRow}
        justify-content: space-between;
    };
`;

NavigationWrapper.Left = styled.div`
    ${NavFlexRow}
    margin-bottom: 10px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
        margin-bottom: 0;
    };
`;

NavigationWrapper.Right = styled.div`
  ${NavFlexRow}
`;

NavigationWrapper.ListItem = styled.li`
    &:not(:last-child){
        margin-right: 15px;
    }
`;

NavigationWrapper.InfoPage = styled.li`
    &:not(:last-child){
        margin-right: 15px;
    }
`;
