import React from 'react';
import { Table, TR, TD, TBody, Input, ActionButton, FormSection } from '../../primitives'
import { IoIosAdd } from "react-icons/io";

const StepsForm = ({ stepsChanged }) => {
    const [steps, setSteps] = React.useState([]);

    return (
        <FormSection title='Steps'>
            <Table>
                <TBody>
                    {
                        steps.map((step, index) => (
                            <TR key={index}>
                                <TD><Input placeholder='Step'
                                    value={step}
                                    onChange={(e) => {
                                        steps[index] = e.target.value;
                                        setSteps([...steps]);
                                        stepsChanged && stepsChanged(steps);
                                    }} /></TD>
                            </TR>
                        )
                        )
                    }
                </TBody>
            </Table>

            <ActionButton type='button' onClick={() => { setSteps([...steps, '']) }}><IoIosAdd />Add Step</ActionButton>
        </FormSection>
    );
}

export default StepsForm;