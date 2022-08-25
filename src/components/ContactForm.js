import { useState } from "react";
import FormInput from "./styles/FormInput";
import InputLabel from "./styles/InputLabel";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetClick = () => {
    setValues(initialValues);
  };

  return (
    <section className="form-container">
      <form
        action="https://formsubmit.co/andrewbernklau@hotmail.com"
        method="post"
      >
        {/* Honeypot */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        {/* Disable Captcha */}
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="hidden"
          name="_next"
          value="https://abernklau1.github.io/portfolio/success"
        />

        <InputLabel for="name">Full Name</InputLabel>
        <FormInput name="name" value={values.name} onChange={handleChange} />
        <InputLabel for="email">Email</InputLabel>
        <FormInput
          name="email"
          value={values.email}
          type="email"
          onChange={handleChange}
        />
        <InputLabel for="subject">Subject</InputLabel>
        <FormInput
          name="subject"
          value={values.subject}
          onChange={handleChange}
        />
        <InputLabel for="comments">Comments</InputLabel>
        <textarea
          name="comments"
          value={values.comments}
          onChange={handleChange}
        ></textarea>
        <input type="submit" name="submit" value="Send" />
        <input
          type="reset"
          name="reset"
          value="Clear Form"
          onClick={handleResetClick}
        />
      </form>
    </section>
  );
};

export default ContactForm;
