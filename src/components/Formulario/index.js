import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormWapper = styled.form`
    width: 100%;
`;

FormWapper.Title = styled.header`
  font-size: 18px;
  margin-bottom: 20px;
`;

export default function Formulario({
  children, title, modelID, ...props
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormWapper {...props}>
      <FormWapper.Title>
        <strong>{title}</strong>
        {modelID}
      </FormWapper.Title>
      {children}
    </FormWapper>
  );
}

Formulario.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  modelID: PropTypes.string,
};

Formulario.defaultProps = {
  title: '',
  modelID: '',
};
