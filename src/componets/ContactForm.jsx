import { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.VITE_EMAILJS_SERVICE_ID,
        process.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus({
          message: "Message sent successfully!",
          type: "success",
        });
        setFormData({ name: "", email: "", phone: "", topic: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setStatus({
          message: "Failed to send message!",
          type: "error",
        });
      });
  };

  return (
    <section id="contacts" className="wrapper contacts">
      <h3>Contact Me</h3>
      <form onSubmit={handleSubmit} className="wrapper contact-form">
        <div className="grid">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="topic"
            placeholder="Topic"
            value={formData.topic}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button className="form-btn" type="submit">
          Send Message
        </button>

        {status.message && (
          <p className={`status ${status.type}`}>{status.message}</p>
        )}
      </form>
    </section>
  );
}
