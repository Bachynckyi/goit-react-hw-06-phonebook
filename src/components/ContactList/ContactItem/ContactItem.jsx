import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ name, number }) => {
  return (
    <li className={css.item}>
      <span>{name}:</span>
      <span className={css.number}>{number}</span>
      <button className={css.butonDelete} type='button'>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}


