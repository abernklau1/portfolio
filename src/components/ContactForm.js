import { useState } from "react";
import FormInput from "./styles/FormInput";
import InputLabel from "./styles/InputLabel";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form-container">
      <form action="mailto:andrewbernklau98@gmail.com">
        <InputLabel for="name">Name:</InputLabel>
        <FormInput name="name" value={values.name} onChange={handleChange} />
        <InputLabel for="email">Email:</InputLabel>
        <FormInput name="email" value={values.email} onChange={handleChange} />
        <InputLabel for="subject">Subject:</InputLabel>
        <FormInput
          name="subject"
          value={values.subject}
          onChange={handleChange}
        />
        <InputLabel for="message">Message:</InputLabel>
        <textarea name="message" value={values.message} onChange={handleChange}>
          Type here...
        </textarea>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
