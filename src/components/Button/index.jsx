import "./style.scss";

const STYLES = ["btn--primary--solid", "btn--primary--outline"];

const SIZES = ["btn--medium", "btn--large"];

const SHAPES = ["btn--square", "btn--round"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonShape
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonShape = SHAPES.includes(buttonShape)
    ? buttonShape
    : SHAPES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonShape}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
