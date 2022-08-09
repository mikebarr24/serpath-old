import React from "react";
import "./Contact.scss";

function Contact() {
  const formInit = {
    name: "",
    email: "",
    message: "",
  };
  const [form, setForm] = React.useState(formInit);

  const changeHandle = (event) => {
    setForm((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandle = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <section id="contact" className="container">
      <h1 className="title-text">Contact</h1>
      <p className="contact__text">
        If you've got any questions, please don't hesitate to get in touch with
        me using the form below.
      </p>
      <form className="contact__form" onSubmit={submitHandle}>
        <input
          type="text"
          name="name"
          className="contact__text-input"
          placeholder="Name"
          value={form.name}
          onChange={changeHandle}
        />
        <input
          type="email"
          name="email"
          className="contact__text-input"
          placeholder="Email"
          value={form.email}
          onChange={changeHandle}
        />
        <textarea
          name="message"
          className="contact__message"
          placeholder="Message"
          value={form.message}
          onChange={changeHandle}
        ></textarea>
        <input type="submit" className="contact__submit-button" value="Send" />
      </form>
    </section>
  );
}

export default Contact;
