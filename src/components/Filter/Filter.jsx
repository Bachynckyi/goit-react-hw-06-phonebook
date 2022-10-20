import css from './Filter.module.css';

export const Filter = () => {
    return (
      <div className={css.SearchBox}>
            <span className={css.SearchBox_label}>Find contacts by name</span>
            <input
            className={css.SearchBox_input}
            type="text"
            placeholder="Please enter name"
            >
            </input>
      </div>
    );
  };
