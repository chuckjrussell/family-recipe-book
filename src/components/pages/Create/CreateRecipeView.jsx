import React from 'react';
import { InputField, Button, FormSection } from '../../primitives';
import IngredientsForm from './IngredientsForm';
import StepsForm from './StepsForm';

const CreateRecipe = ({ onSubmit }) => {
    const [title, setTitle] = React.useState('');
    const [sourceName, setSourceName] = React.useState('');
    const [sourceUrl, setSourceUrl] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');
    const [serves, setServes] = React.useState('');

    const [ingredients, setIngredients] = React.useState([]);
    const [steps, setSteps] = React.useState([]);

    return (
        <section>
            <h1>Create New Recipe</h1>
            <form onSubmit={(e) => {
                var recipe = {
                    title,
                    sourceName,
                    sourceUrl,
                    imageUrl,
                    serves,
                    ingredients,
                    steps
                }
                onSubmit(recipe);
                e.preventDefault();
            }}>
                <FormSection>
                    <InputField id='title' label='Recipe Title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <InputField id='sourceName' label='Source' value={sourceName} onChange={(e) => { setSourceName(e.target.value) }} />
                    <InputField id='sourceUrl' label='Source Url' value={sourceUrl} onChange={(e) => { setSourceUrl(e.target.value) }} />
                    <InputField id='imageUrl' label='Image Url' value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }} />
                    <InputField id='serves' label='Serves' value={serves} onChange={(e) => { setServes(e.target.value) }} />
                </FormSection>

                <IngredientsForm ingredientsChanged={(ingredients) => { setIngredients(ingredients) }} />
                <StepsForm stepsChanged={(steps) => { setSteps(steps) }} />

                <Button primary>Create</Button>
            </form>
        </section >
    )
}

export default CreateRecipe;