import React from 'react';
import { RecipeHeader, RecipeIngredients, RecipeSteps } from '../../layout';
import styled from 'styled-components';

const RecipeView = ({ recipe }) => {
    return (
        <>
            <div className='row'>
                <div className='col-xs-12'>
                    <RecipeHeader title={recipe.title} image={recipe.imageUrl} />
                </div>
            </div>

            <BodyContent className='row'>
                <div className='col-sm-4'>
                    <RecipeIngredients ingredients={recipe.ingredients} />
                </div>
                <div className='col-sm-8'>
                    <RecipeSteps steps={recipe.steps} />
                </div>
            </BodyContent>
        </>
    );
}

const BodyContent = styled.div`
    margin-top: 48px;
`

export default RecipeView;