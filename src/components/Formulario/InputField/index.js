import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper } from './style/InputWrapper';

export default function InputField({
  type,
  placeholder,
  name,
  onChange,
  value,
  ...props
}) {
  return (
    <InputWrapper>
      <InputWrapper.Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </InputWrapper>
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  onChange: () => {},
  value: '',
};
