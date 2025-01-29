import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { setFilter } from "./redux/filtersSlice";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name) || "";
  const dispatch = useDispatch();

  const handleAddContact = (values, actions) => {
    const newContact = {
      id: Date.now().toString(), // Додаємо унікальний ID
      name: values.nameContact,
      number: values.numberContact,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  const filterContacts = contacts.filter((contact) =>
    contact?.name?.toLowerCase().includes(filter)
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
          contactList={filterContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
}

export default App;
