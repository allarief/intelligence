"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Menangani perubahan input form
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Menangani pengiriman form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kirim email menggunakan EmailJS
    emailjs
      .send(
        "service_wnrdst6",    // Ganti dengan Service ID Anda dari EmailJS
        "template_lgc3msf",   // Ganti dengan Template ID Anda dari EmailJS
        {
          name: formData.name,    // Mengirimkan nama dari form
          email: formData.email,  // Mengirimkan email dari form
          message: formData.message,  // Mengirimkan pesan dari form
        },
        "kQFQe6W6e7ffAtfgF"   // Ganti dengan User ID Anda dari EmailJS
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          setStatus("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-gray-600 mt-2">We'd love to hear from you! Feel free to reach out to us.</p>
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
            {status && <p className="mt-4 text-center text-lg">{status}</p>}
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold">Address:</span> Equity Tower lantai 17, Kawasan 9 SCBD, di jalan jendral Sudirman kavling. 52-53 DKI Jakarta
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+1234567890" className="text-blue-500 hover:underline">
                +62215151392
              </a>
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:info@example.com" className="text-blue-500 hover:underline">
                info@intelligence.co.id
              </a>
            </li>
          </ul>
          <br></br>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.6698289738568!2d106.80977987615979!3d-6.224632672259606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1417c42660d%3A0xe3824299e64349f!2sEquity%20Tower!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
