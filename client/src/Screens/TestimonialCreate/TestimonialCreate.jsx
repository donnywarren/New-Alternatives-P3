import React, { useState } from "react";
import "./TestimonialCreate.css";
import { Redirect } from "react-router-dom";
import Layout from "../../Components/Shared/Layout/Layout";
import { createTestimonial } from "../../Services/Testimonials";

const TestimonialCreate = () => {
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

  if (isCreated) {
    return <Redirect to={"/our-stories"} />;
  }

  return (
    <div className="complete-testimonial-create-screen">
      <h1>Add New Testimonial</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <label htmlFor="content">Your Testimonial:</label>
        <textarea
          className="textarea-content"
          rows={10}
          placeholder="Content"
          // value={post.content}
          name="content"
          required
          onChange={handleChange}
        />
        <label htmlFor="author">Author:</label>
        <input
          className="input-author"
          placeholder="Author"
          value={testimonial.author}
          name="author"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TestimonialCreate;
