import styled from 'styled-components';

export const TextMessage = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.dark.textMessage.error};
    margin-bottom: 15px;
`;
