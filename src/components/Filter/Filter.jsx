import * as yup from 'yup';
import { TitleBlock } from 'components/Form/Form.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
});

export const Filter = ({ value, changeFilter }) => {
  return (
    <div>
      <TitleBlock>Find contacts by name</TitleBlock>
      <input
        type="text"
        name="name"
        pattern={schema}
        title="only sting"
        onChange={changeFilter}
        value={value}
      />
    </div>
  );
};
