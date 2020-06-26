import React from 'react';
import styled from 'styled-components';

const RecipeSteps = ({steps}) => {
    return (
        <>
        <StepsHeading>Method</StepsHeading>
            <OrderedList>
                {steps.map((s, idx) => 
                    <ListItem key={idx}>{s}</ListItem>)}
            </OrderedList>
        </>
        )
};

const StepsHeading = styled.h2`
`

const OrderedList = styled.ol`
    list-style: none;
    counter-reset: my-awesome-counter;
    display: flex;
    flex-wrap: wrap;
    margin: 24px 0 0 0;
    padding: 0;
`

const ListItem = styled.li` 
    counter-increment: my-awesome-counter;
    display: flex;
    width: 100%;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
    margin: 24px 0;
    line-height: 24px;

    &:first-of-type {
        margin-top: 0;
    }

    &::before {
        content: counter(my-awesome-counter);
        font-weight: bold;
        font-size: 2rem;
        min-width: 48px;
        font-family: 'Montserrat', serif;
        line-height: 1;
      }
`

export default RecipeSteps;