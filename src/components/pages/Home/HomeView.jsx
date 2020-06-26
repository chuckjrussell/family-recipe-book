import React from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';

const HomeView = ({ recipes }) => {
    return (
        <>
            <h1>Linda Russells Bland Cookbook</h1>
            <div>
                <RecipeGrid>
                    {recipes.map((r, idx) => {
                        return (
                            <RecipeGridItem key={idx}>
                                <RecipeCard recipe={r} />
                            </RecipeGridItem>
                        )
                    })}
                </RecipeGrid>
            </div>
        </>
    )
}

const RecipeGrid = styled.ul`
    display: flex;
    flex-wrap:wrap;
    margin: 0;
    padding: 0;
    list-style: none;
`

const RecipeGridItem = styled.li`
    width: 33%;
    margin: 0 0 32px 0;
    padding: 8px;
    list-style: none;
    display: flex;
    box-sizing: border-box;

    &:nth-child(3n+1){
        padding-left:0;
    }

    &:nth-child(3n){
        padding-right:0;
    }
`

export default HomeView;