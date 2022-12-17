import React from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import "./Contact.css";

/*printing form details to */
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>
          Get in touch with <span>PRISM</span>
        </h1>
        <p>For any queries and suggestions, feel free to ask...</p>
        <form onSubmit={onSubmit}>
          <div className="inp">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form control" type="text" id="name" required />
          </div>

          <div className="inp">
            <label className="form-label" htmlFor="name">
              Email Id
            </label>
            <input className="form control" type="email" id="email" required />
          </div>

          <div className="inp">
            <label className="form-label" htmlFor="name">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="submit-btn" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
