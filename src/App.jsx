import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact, setFilter } from "./redux/contactsSlice";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleAddContact = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <div className="contain-date">
        <div>
          <SearchBox onFind={handleFilterChange} />
          <ContactForm addContacts={handleAddContact} />
        </div>
        <ContactList
          contactList={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
}

export default App;
