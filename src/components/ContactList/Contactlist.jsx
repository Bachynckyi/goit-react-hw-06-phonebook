import { ContactItem } from "./ContactItem/ContactItem";
import css from './ContactList.module.css';
  
export const ContactList = () => {
  return (
    <ul className={css.contactList}>
        <ContactItem/>
    </ul>
  )
};