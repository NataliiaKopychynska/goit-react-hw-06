import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact({
  contactName,
  contactNumber,
  onDeleteContact,
  id,
}) {
  return (
    <li className={s.containerContact}>
      <div className={s.contactInfo}>
        <div className={s.option}>
          <p className={s.icon}>
            <FaUser />
          </p>{" "}
          <p className={s.title}>{contactName}</p>
        </div>

        <div className={s.option}>
          <p className={s.icon}>
            <FaPhoneAlt />
          </p>{" "}
          <p className={s.title}>{contactNumber}</p>
        </div>
      </div>
      <button className={s.btn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
