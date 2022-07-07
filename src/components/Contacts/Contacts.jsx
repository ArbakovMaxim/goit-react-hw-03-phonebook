import {
  ContWrapper,
  ContList,
  ContItem,
  BtnDeleteContact,
} from './Contacts.styled';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ContWrapper>
      <ContList>
        {contacts.map(contact => {
          return (
            <ContItem key={contact.id}>
              {contact.name}: {contact.number}
              <BtnDeleteContact
                type="button"
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </BtnDeleteContact>
            </ContItem>
          );
        })}
      </ContList>
    </ContWrapper>
  );
};
