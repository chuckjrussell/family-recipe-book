import React from "react";
import FieldGroup from "./FieldGroup";
import Input from "./Input";

interface InputFieldProps {
  name: string;
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  ...otherProps
}) => {
  return (
    <FieldGroup name={name} label={label}>
      <Input {...otherProps} />
    </FieldGroup>
  );
};
