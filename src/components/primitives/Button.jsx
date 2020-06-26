import React from 'react';
import styled from 'styled-components';

const Button = ({children, ...otherProps}) => {
    return <StyledButton {...otherProps}>
        {children}
    </StyledButton>
}

const StyledButton = styled.button`
    padding: 12px 24px;
    font-size: 16px;
    background-color: ${props => props.primary ? props.theme.button : props.theme.backgroundColor};
    color: ${props => props.primary ? props.theme.buttonText : props.theme.button};
    border-radius: 4px;
    border: 2px solid ${props => props.theme.button};
    margin: 8px 0;
    font-weight: bold;
`

export default Button;