import * as yup from 'yup';
import { Form, Formik } from 'formik';
import {
  ButtonSubmit,
  TitleBlock,
  WrapperForm,
  Input,
  Eror,
} from './Form.styled';

export const FormName = ({ addContact }) => {
  const hendleSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  const nameValid =
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  const numberValid =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  let schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        nameValid,
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan'
      )
      .required(),
    number: yup
      .string()
      .matches(
        numberValid,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  });

  return (
    <WrapperForm>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={hendleSubmit}
      >
        <Form>
          <TitleBlock>Name</TitleBlock>
          <Input type="text" name="name" />
          <Eror name="name" component="div" />
          <TitleBlock>Number</TitleBlock>
          <Input type="tel" name="number" />
          <Eror name="number" component="div" />
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </Form>
      </Formik>
    </WrapperForm>
  );
};
