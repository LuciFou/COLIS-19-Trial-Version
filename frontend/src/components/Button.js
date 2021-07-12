import React from 'react';
import '../../assets/css/Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--msg-first'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide', 'btn--service', 'btn--link', 'btn--msg'];

const COLOR = ['primary', 'blue', 'red', 'green', 'beige'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
