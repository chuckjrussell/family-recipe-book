import React from 'react';
import styled from 'styled-components';

const RecipeHeader = ({ title, image }) => {
    return (
        <Header background={image}>
            <HeaderText>{title}</HeaderText>
        </Header>
    )
}

const Header = styled.header`
    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${props => props.background});
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 -32px 0 -32px;
`

const HeaderText = styled.h1`
    font-size:4em;
    font-weight: bold;
    color: white;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

`

export default RecipeHeader;