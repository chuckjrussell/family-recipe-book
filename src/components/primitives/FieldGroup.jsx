import React from 'react';
import styled from 'styled-components';

const FieldGroup = ({name, children, label}) => {
    return (
        <Field className='row'>
            <label htmlFor={name} className='col-sm-3'>{label}</label>
            <div className='col-sm-9'>
                {children}
            </div>
        </Field>
    )
}

const Field = styled.div`
    height: 32px;
    margin: 0 0 16px 0;
`

export default FieldGroup;