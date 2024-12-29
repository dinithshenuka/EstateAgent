import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Contact Us</h1>

      <div className="row g-5">
        {/* Contact Information */}
        <div className="col-lg-4">
          <div className="card border-0 bg-light h-100">
            <div className="card-body">
              <h3 className="h4 mb-4">Get in Touch</h3>

              <div className="d-flex mb-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className=" mt-1 me-3"
                  size="lg"
                />
                <div>
                  <h5 className="h6">Address</h5>
                  <p className="text-muted mb-0">
                    123 Property Lane, Real Estate City
                  </p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className=" mt-1 me-3"
                  size="lg"
                />
                <div>
                  <h5 className="h6">Phone</h5>
                  <p className="text-muted mb-0">(033) 123-4567</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className=" mt-1 me-3"
                  size="lg"
                />
                <div>
                  <h5 className="h6">Email</h5>
                  <p className="text-muted mb-0">contact@estateagent.com</p>
                </div>
              </div>

              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faClock}
                  className=" mt-1 me-3"
                  size="lg"
                />
                <div>
                  <h5 className="h6">Business Hours</h5>
                  <p className="text-muted mb-0">
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h4 mb-4">Send us a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-warning">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
