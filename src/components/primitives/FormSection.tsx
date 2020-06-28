import React from "react";
import styled from "styled-components";

interface FormSectionProps {
  title?: string;
}

const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
  return (
    <StyledSection>
      {title && <h2>{title}</h2>}
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin-top: 48px;
`;

export default FormSection;
