import React from 'react';
import NextLink from 'next/link';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.dark.color.primary};
  text-decoration: none;

  &:hover{
    color: ${({ theme }) => theme.dark.color.contrast}
  }
  &:not(:last-child){
    margin-right: 10px;
  }

  ${({ navItem }) => {
    if (navItem) {
      return css`
        font-size: 15px;
        text-transform: uppercase;
        font-weight: 600;
      `;
    }
    return '';
  }}

  ${({ logout, excluir }) => {
    if (logout || excluir) {
      return css`
        color: ${({ theme }) => theme.dark.textMessage.error};

        &:hover{
          color: ${({ theme }) => theme.dark.textMessage.error};
          opacity: .5;
        }
      `;
    }
    return '';
  }}
`;

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
