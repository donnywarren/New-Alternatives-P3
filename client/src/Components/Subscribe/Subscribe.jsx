import React, { useState } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  const [emailInput, updateEmailInput] = useState("");

  const handleStorage = (e) => {
    e.preventDefault();
    if (emailInput !== "") {
      localStorage.setItem("email-address", emailInput);
      updateEmailInput("");
      const address = localStorage.getItem("email-address");
      alert(`${address} has been added to our mailing list.`)
    } else {
      alert("Please enter your email")
    }
    
  };

  const handleChange = (e) => {
    const email = e.target.value;
    updateEmailInput(email);
  };

  const handleRemove = () => {
    const address = localStorage.getItem("email-address")
    if (!address) {
      alert("Address not found")
    } else {
      updateEmailInput("")
      localStorage.removeItem("email-address")
      alert(`Your address has been removed from our mailing list.`)
    }
  
  }

  return (
    <div className="email-container">
      <form className="email-form" onSubmit={handleStorage}>
        <input
          type="email"
          className="input-email"
          placeholder="Email"
          value={emailInput}
          onChange={handleChange}
        />
        <button className="subscribe-button">Subscribe</button>
      </form>
      <div className="unsubscribe" onClick={handleRemove}>
          unsubscribe
      </div>
    </div>
  );
};

export default Subscribe;
