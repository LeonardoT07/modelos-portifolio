import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InputField from '../InputField';

export const FormWrapper = styled.div`
    margin-bottom: 25px;
`;

FormWrapper.Title = styled.h2`
  margin: 35px 0px 20px 0px;
  padding-top: 10px;
  color: ${({ theme }) => theme.dark.color.contrast};
`;

FormWrapper.Label = styled.label`
    font-size: 16px;
    margin-bottom: 20px;
`;

FormWrapper.InputBox = styled.div`
    padding-top: 6px;
`;

export default function FormGroup({
  title, fieldLabel, fieldName, changeFunc, objectModel, disabledMode,
}) {
  return (
    <FormWrapper>
      {title
        ? <FormWrapper.Title>{title}</FormWrapper.Title>
        : ''}

      <FormWrapper.Label htmlFor={fieldName}>
        {fieldLabel}
        {' '}
        <FormWrapper.InputBox>
          <InputField placeholder={fieldLabel} type="text" name={fieldName} value={objectModel} onChange={changeFunc} disabled={disabledMode} isRequired />
        </FormWrapper.InputBox>
      </FormWrapper.Label>

    </FormWrapper>
  );
}

FormGroup.propTypes = {
  title: PropTypes.string,
  fieldLabel: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  changeFunc: PropTypes.func.isRequired,
  objectModel: PropTypes.string,
  disabledMode: PropTypes.bool,
};

FormGroup.defaultProps = {
  title: '',
  objectModel: '',
  disabledMode: false,
};
