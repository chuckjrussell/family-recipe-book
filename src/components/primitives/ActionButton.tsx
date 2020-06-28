import React from "react";
import styled from "styled-components";

interface ActionButtonProps {
  icon: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  icon,
  ...otherProps
}) => {
  return (
    <StyledButton {...otherProps}>
      {icon}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  primary?: boolean;
}>`
  font-size: 16px;
  background-color: ${(props) =>
    props.primary ? props.theme.button : props.theme.backgroundColor};
  color: ${(props) =>
    props.primary ? props.theme.buttonText : props.theme.button};
  border: 0px solid ${(props) => props.theme.button};
  padding: 0;
  margin: 8px 0;
  font-weight: bold;
  size: 1em;
  align-items: center;
  line-height: 20px;
  display: inline-flex;
  align-items: center;

  svg {
    height: 2em;
    width: 2em;
    margin-right: 8px;
  }
`;

export default ActionButton;
