import React from 'react';
import styled from 'styled-components';

const RecipeIngredients = ({ingredients}) => {
    return (
        <>
        <IngredientsHeading>Ingredients</IngredientsHeading>
            <UnorderedList>
                {ingredients.map((i, idx) => 
                    <ListItem key={idx}>{`${i.amount} ${i.unit} ${i.name}`}</ListItem>)}
            </UnorderedList>
        </>
        )
};

const IngredientsHeading = styled.h2`
`

const UnorderedList = styled.ul`
    margin-top: 24px;
    list-style: none;
    padding: 0;
`

const ListItem = styled.li`
    margin: 10px 0;
    font-size: 0.75rem;
`

export default RecipeIngredients;