import css from './ContactItem.module.css';

export const ContactItem = () => {
  return (
    <li className={css.item}>
      <span>123</span>
      <span className={css.number}>123</span>
      <button className={css.butonDelete} type='button'>Delete</button>
    </li>
  );
};


