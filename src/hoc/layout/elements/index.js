import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  height: 100%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: 10% auto;
  border-radius: 1rem;
  padding: 4rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-form);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  width: 100%;
`;
