import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const ButtonSubmit = styled.button`
  display: block;
  margin-top: 20px;
`;

export const TitleBlock = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-size: ${p => p.theme.fontsSizes[3]}px;
`;

export const WrapperForm = styled.div`
  border: 1px solid black;
  padding: 32px;
  width: 300px;
`;

export const Input = styled(Field)`
  margin-bottom: 20px;
`;

export const Eror = styled(ErrorMessage)`
  color: ${p => p.theme.colors.red};
  font-size: ${p => p.theme.fontsSizes[0]}px;
  width: 180px;
`;
