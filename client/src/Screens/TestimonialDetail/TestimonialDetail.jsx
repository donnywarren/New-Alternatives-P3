import React, { useState, useEffect } from "react"
import { useParams, Redirect } from "react-router-dom"
import "./TestimonialDetail.css"
import "../../Components/Shared/Nav/Nav.css"
import { getTestimonial, updateTestimonial, deleteTestimonial } from "../../Services/Testimonials"
import Layout from "../../Components/Shared/Layout/Layout"
import LeftQuote from "../../Assets/left-quote.png";
import RightQuote from "../../Assets/right-quote.png";

const TestimonialDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [testimonial, setTestimonial] = useState({
    content: "",
    author: "",
  });

  const [updated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const grabTestimonial = async () => {
      const testimonial = await getTestimonial(id);
      setTestimonial(testimonial);
    };
    grabTestimonial();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial({
      ...testimonial,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateReq = await updateTestimonial(id, testimonial);
    setUpdated(true);
  };

  if (updated) {
    return <Redirect to={"/our-stories"} />;
  }
  return (
    <Layout>
      <div className="complete-testimonial-detail-screen">
        <h1 className="edit-header">Edit Your Testimonial</h1>
        <div className="testimonial-form">
        <img 
              src={LeftQuote} 
              alt="quote mark" 
              className="edit-left-quote" 
            />
          <form onSubmit={handleSubmit}>
            
            <textarea
              className="edit-content"
              name="content"
              value={testimonial.content}
              onChange={handleChange}
              required
            />
            <input
              className="edit-author"
              name="author"
              value={testimonial.author}
              onChange={handleChange}
              required
            />
            <img
              src={RightQuote}
              alt="quote mark"
              className="edit-right-quote"
            />
            <div className="button-container">
              <button type="submit" className="button-save">
                Save
              </button>
              <button
                className="button-delete"
                onClick={() => deleteTestimonial(testimonial._id)}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default TestimonialDetail;
