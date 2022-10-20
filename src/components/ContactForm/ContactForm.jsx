import css from './ContactForm.module.css';

export const ContactForm = () => {
    return (
        <form className={css.form}>
            <div>
                <label className={css.label}>Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder='Please enter name'
                        className={css.addInput}
                    />
                </label>
            </div>
            <div>
                <label className={css.label}>Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder='Please enter number'
                        className={css.addInput}
                        />
                </label>
            </div>
            <button type='submit' className={css.button_submit}>Add Contact</button>
        </form>
    )
};

