import React from 'react';
import HomeView from './HomeView'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const recipesQuery = gql`
  {
    recipes {
        id
        title
        servings
        imageUrl
    }
  }
`;
const HomeController = () => {
    const { loading, error, data } = useQuery(recipesQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <HomeView recipes={data.recipes} />
    )
}

export default HomeController;