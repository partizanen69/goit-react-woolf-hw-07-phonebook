import { useSelector } from 'react-redux';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { AppStyled } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FullPageLoader } from './Loader/Loader';
import { selectIsContactsLoading } from '../store/selectors';

export const App = () => {
  const isContactsLoading = useSelector(selectIsContactsLoading);

  return (
    <>
      <AppStyled>
        <div className="container">
          <h2 className="chapter-name">Phonebook</h2>
          <AddContactForm />
          <h2 className="chapter-name">Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </AppStyled>
      {isContactsLoading && <FullPageLoader />}
    </>
  );
};
