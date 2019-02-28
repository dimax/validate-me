import React from 'react';
import PropTypes from 'prop-types';
import useInput from '@validate-me/react/useInput';

export default function MyAwesomeInput(props) {
  const [inputState, inputProps] = useInput(props);

  return (
    <div>
      <input {...inputProps} />
      <div>
        Is valid? {inputState.pristine ? '' : inputState.error || 'yes'}
      </div>
      <div>Value: {inputProps.value}</div>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  MyAwesomeInput.propTypes = {
    validations: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.oneOf(['number', 'checkbox', 'date']),
  };
}
