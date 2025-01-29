import s from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

export default function ContactList({ contactList, onDeleteContact }) {
  return (
    <ul className={s.containerList}>
      {contactList.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          contactName={contact.name}
          contactNumber={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}
