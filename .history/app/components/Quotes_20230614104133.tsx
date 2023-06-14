"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Quotes = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [needs, setNeeds] = useState('');
  const [notification, setNotification] = useState({ message: '', isSuccess: false });

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Send the form data to your email using EmailJS
    emailjs
      .send(
        'service_51v4ngk',
        'template_8fxwcg9',
        {
          name,
          email,
          phone,
          company,
          needs,
        },
        '4yHJx3TZmrAgRA53I'
      )
      .then(
        (result) => {
          // Show a success notification
          setNotification({ message: 'Success!', isSuccess: true });
          // Reset the form fields
          setName('');
          setEmail('');
          setPhone('');
          setCompany('');
          setNeeds('');
        },
        (error) => {
          // Show an error notification
          setNotification({ message: 'Error. Please try again.', isSuccess: false });
        }
      );
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-8 bg-yellow-500 rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-8">Quotes</h1>
      {/* Show the notification if it's not empty */}
      {notification.message && (
        <div
          className={`text-center py-2 rounded mb-4 ${
            notification.isSuccess ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {notification.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="company" className="block mb-1">
              Organization Name
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="needs" className="block mb-1">
            Tell us more about your needs:
          </label>
          <textarea
            id="needs"
            value={needs}
            onChange={(event) => setNeeds(event.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            rows={4}
            required
          />
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Quotes;
