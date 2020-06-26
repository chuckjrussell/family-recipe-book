import React from 'react';
import FieldGroup from './FieldGroup';
import Input from './Input';

const InputField = ({label, ...otherProps}) => {
    return (
        <FieldGroup label={label}>
            <Input {...otherProps} />
        </FieldGroup>
    )
}

export default InputField;