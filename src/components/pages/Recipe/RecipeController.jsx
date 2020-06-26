import React from 'react';
import RecipeView from './RecipeView';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const getRecipeQuery = (id) => {
    return gql`
    {
        recipe(id: ${id}){
            id
            title
            author{
                id
                imageUrl
                firstName
                lastName
            }
            servings
            imageUrl
            sourceUrl
            sourceName
            tags
            steps
            ingredients{
                amount
                unit
                name
                preparation
            }
            notes
        }
    }`
}

const Recipe = () => {

    const { id } = useParams();


    const { loading, error, data } = useQuery(getRecipeQuery(id));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <RecipeView recipe={data.recipe}></RecipeView>
    )
}

export default Recipe;