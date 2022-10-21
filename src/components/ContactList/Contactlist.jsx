import { ContactItem } from "./ContactItem/ContactItem"
import css from './ContactList.module.css';
import { useSelector } from "react-redux";
  
export const ContactList = () => {

  const data = useSelector(state => state.addContact.items)

  return (
    <ul className={css.contactList}>
        {data.length !== 0 ? (
          data.map(dataItem => {
          return (
          <ContactItem
              key={dataItem.id}
              id={dataItem.id}
              name={dataItem.name}
              number={dataItem.number}  
          />
          )}))
          : (<li>There is no one contact</li>)}
    </ul>
  );
};


