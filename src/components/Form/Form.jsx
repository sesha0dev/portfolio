import React, { useState } from "react";
import styles from "./Form.module.css";

export const Form = () => {
  const [showPopup, setShowPopup] = useState(false); // State for pop-up notification

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1e6cc144-8cf6-47bc-ad65-d10d7d90d8b5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setShowPopup(true); // Show the pop-up notification
      event.target.reset(); // Clear all fields in the form
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Hide the pop-up notification
  };

  return (
    <section className={styles.container} id="form">
      <div className={styles.content}>
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>
          <div className={styles.inputBox}>
            <label>Full Name</label>
            <input
              type="text"
              className={styles.field}
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className={styles.inputBox}>
            <label>Email Address</label>
            <input
              type="email"
              className={styles.field}
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>

          <div className={styles.inputBox}>
            <label>Your Message</label>
            <textarea
              className={styles.fieldMessage}
              name="message"
              placeholder="Enter your Message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Pop-up Notification */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <p>Email has been sent successfully!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Form;
