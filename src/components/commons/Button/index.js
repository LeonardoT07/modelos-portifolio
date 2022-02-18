import styled, { css } from 'styled-components';

export const Button = styled.button`
    width: 100%;
    height: 45px;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.dark.color.primary};
    background-color: ${({ theme }) => theme.dark.button.primary};
    transition: ${({ theme }) => theme.transition};

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.dark.buttonHover.primary};
    }
    &:disabled{
        cursor: not-allowed;
        opacity: .3;
    }

    ${({ edit }) => {
    if (edit) {
      return css`
        color: ${({ theme }) => theme.dark.textMessage.info};
        background-color: ${({ theme }) => theme.dark.background.primary};
        height: auto;
        font-size: 15px;
        text-transform: uppercase;
        font-weight: 600;

        &:hover{
          color: ${({ theme }) => theme.dark.textMessage.info};
          background-color: ${({ theme }) => theme.dark.background.primary};
          opacity: .5;
        }
      `;
    }
    return '';
  }}
`;
