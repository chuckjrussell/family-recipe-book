import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    return (
        <RecipeContainer>
            <Link to={`/recipe/${recipe.id}`}>
                <RecipeImage src={recipe.imageUrl} />
                <RecipeTitle>{recipe.title}</RecipeTitle>
            </Link>
        </RecipeContainer>
    )
}

const RecipeContainer = styled.div`
    width: 100%;
`

const RecipeImage = styled.img`
    width: 100%;
`

const RecipeTitle = styled.h3`
    margin-top: 4px;
`

export default RecipeCard;