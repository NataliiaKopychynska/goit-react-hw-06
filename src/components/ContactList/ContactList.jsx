import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id)); // Видаляємо контакт за допомогою dispatch
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.containerList}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contactName={contact.name}
          contactNumber={contact.number}
          id={contact.id}
          onDeleteContact={handleDeleteContact} // Передаємо функцію видалення
        />
      ))}
    </ul>
  );
}
