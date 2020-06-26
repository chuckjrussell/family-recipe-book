import React from 'react';
import CreateRecipeView from './CreateRecipeView';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CreateRecipeController = () => {

    const createMutation = gql`
    mutation{
        createRecipe(recipe:$recipe) {
            title
            servings
        }
    }
`;

    const [createRecipe] = useMutation(createMutation);

    return (
        <CreateRecipeView recipe={(r) => createRecipe({ variables: { recipe: r } })} />
    )
}

export default CreateRecipeController;