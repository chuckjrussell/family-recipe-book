import React from "react";
import { RecipeHeader, RecipeIngredients, RecipeSteps } from "../../layout";
import styled from "styled-components";
import useAxios from "axios-hooks";
import { useParams } from "react-router-dom";

export const Recipe: React.FC = (props) => {
  const { id } = useParams();
  const [{ data, loading, error }, refetch] = useAxios(
    `http://localhost:4000/recipes/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <RecipeHeader title={data.title} image={data.imageUrl} />
        </div>
      </div>

      <BodyContent className="row">
        <div className="col-sm-4">
          <RecipeIngredients ingredients={data.ingredients} />
        </div>
        <div className="col-sm-8">
          <RecipeSteps steps={data.steps} />
        </div>
      </BodyContent>
    </>
  );
};

const BodyContent = styled.div`
  margin-top: 48px;
`;
