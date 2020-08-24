import React, { useState } from "react";
import "./TestimonialCreate.css";
import { useHistory } from "react-router-dom";
import Layout from "../../Components/Shared/Layout/Layout";
import { createTestimonial } from "../../Services/Testimonials";
import LeftQuote from "../../Assets/left-quote.png";
import RightQuote from "../../Assets/right-quote.png";

const TestimonialCreate = () => {
  const history = useHistory();
  const [testimonial, updateTestimonial] = useState({
    content: "",
    author: "",
  });

  const [isCreated, updateIsCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateTestimonial({ ...testimonial, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createTestimonial(testimonial);
    updateIsCreated({ created });
  };

  const testingRedirect = () => {
    history.push("/our-stories");
  };

  if (isCreated) {
    setTimeout(testingRedirect, 3000);

    return (
      <div className="submit-thankyou-container">
        <h1 className="submit-thankyou">Thank You!</h1>
        <p className="submit-thankyou-text">
          All new testimonials are reviewed and posted within 7 to 10 working
          days.
        </p>
      </div>
    );
  }

  return (
    <div className="complete-testimonial-create-screen">
      <h1>Add New Testimonial</h1>
      <p>
        Please enter your new testimonial below.
        <br />
        (300 character limit)
      </p>
      <form className="create-form" onSubmit={handleSubmit}>
        <img
          src={LeftQuote}
          alt="quote mark"
          className="quote-create left-quote-create"
        />
        <label htmlFor="content" />
        <textarea
          className="textarea-content"
          rows={10}
          maxLength="300"
          placeholder="Testimonial:"
          value={testimonial.content}
          name="content"
          required
          onChange={handleChange}
        />
        <label htmlFor="author" />
        <input
          className="input-author"
          placeholder="Author:"
          value={testimonial.author}
          maxLength="25"
          name="author"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
        <img
          src={RightQuote}
          alt="quote mark"
          className="quote-create right-quote-create"
        />
      </form>
    </div>
  );
};

export default TestimonialCreate;
