import styled from 'styled-components';

export const LoginWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1080px;
    height: auto;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        flex-direction: row;
    };
`;

LoginWrapper.Left = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    margin-right: 5%;
    height: 100%;
    
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        display: flex;
    };
`;

LoginWrapper.Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.dark.background.contrast};
    padding: 30px 20px;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 1px 5px 18px ${({ theme }) => theme.dark.background.secondary};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        width: 50%;
    };
`;
