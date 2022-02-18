import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

InputWrapper.Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.dark.background.secondary}00;
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:disabled{
    color: ${({ theme }) => theme.dark.color.secondary};
    background-color: ${({ theme }) => theme.dark.background.secondary};
    border-bottom: 1px solid ${({ theme }) => theme.dark.background.contrast};
    /* cursor: not-allowed; */
    cursor: text;
  }

  &::placeholder {
    color: ${({ theme }) => theme.dark.color.secondary};
  }
`;
