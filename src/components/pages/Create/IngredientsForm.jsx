import React from 'react';
import { Table, TR, TD, TBody, Input, ActionButton, Dropdown, FormSection } from '../../primitives';
import { IoIosAdd } from "react-icons/io";

const IngredientsForm = ({ ingredientsChanged }) => {
    const [ingredients, setIngredients] = React.useState([]);

    function setIngredientValue(e, property, index) {
        ingredients[index][property] = e.target.value;
        setIngredients([...ingredients]);
        ingredientsChanged && ingredientsChanged(ingredients);
    }

    return (
        <FormSection title='Ingredients'>
            <Table>
                <TBody>
                    {
                        ingredients.map((ingredient, index) => (
                            <TR key={index}>
                                <TD>
                                    <Input placeholder='Amount'
                                        value={ingredient.amount}
                                        onChange={(e) => setIngredientValue(e, 'amount', index)} />
                                </TD>
                                <TD>
                                    <Dropdown options={[{
                                        value: 'metrictsp',
                                        label: 'tsp (metric)'
                                    }, {
                                        value: 'metrictbsp',
                                        label: 'tbsp (metric)'
                                    }
                                    ]} />
                                </TD>
                                <TD>
                                    <Input placeholder='Ingredient'
                                        value={ingredient.name}
                                        onChange={(e) => setIngredientValue(e, 'name', index)} />
                                </TD>
                                <TD>
                                    <Input placeholder='Preparation'
                                        value={ingredient.preparation}
                                        onChange={(e) => setIngredientValue(e, 'preparation', index)} />
                                </TD>
                            </TR>
                        )
                        )
                    }
                </TBody>
            </Table>

            <ActionButton type='button' onClick={() => { setIngredients([...ingredients, {}]) }}><IoIosAdd />Add Ingredient</ActionButton>
        </FormSection>
    );
}

export default IngredientsForm;