import styled from 'styled-components';

export const ListaCardsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
    
  width: 100%;
  height: auto;
  list-style: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  };
`;

ListaCardsWrapper.Item = styled.li`
  width: 98%;
  margin: 0px 1% 20px 1%;
  padding: 20px 20px;

  background-color: ${({ theme }) => theme.dark.background.primary};
  border: 1px solid ${({ theme }) => theme.dark.background.contrast};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.dark.background.secondary};

  &:hover {
    box-shadow: 0px 0px 3px ${({ theme }) => theme.dark.backgroundHover.primary};
  }

  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 48%;
  };
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 31.333%;
  };
  /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 23%;
  }; */
`;

ListaCardsWrapper.ItemAtributes = styled.p`
  color: ${({ theme }) => theme.dark.color.primary};
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 5px;
`;

ListaCardsWrapper.ItemValues = styled.span`
  color: ${({ theme }) => theme.dark.color.secondary};
  font-size: 15px;
  font-weight: 400;
`;

ListaCardsWrapper.Actions = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid ${({ theme }) => theme.dark.background.contrast};

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center
`;
