import React, { useState, useEffect } from 'react';
// No need for App.css if you're primarily using Tailwind and have it imported in index.css
// import './App.css';

function App() {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // State to store fetched details from the backend
  const [details, setDetails] = useState([]);

  // State for user feedback messages (success/error)
  const [responseMessage, setResponseMessage] = useState(''); // <-- THIS LINE MOVED UP

  // Define your backend API URL
  const API_URL = 'http://localhost:5000/api/details';

  // State for user feedback messages (success/error)
  // THIS LINE NOW COMES AFTER responseMessage is defined
  const responseMessageColorClass = responseMessage.startsWith('Error:') ? 'text-red-500' : 'text-green-500';


  // Function to fetch all details from the backend
  const fetchDetails = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDetails(data); // Update the state with fetched details
    } catch (error) {
      console.error('Error fetching details:', error);
      setResponseMessage('Error: Failed to load details. Please check the backend connection.');
    }
  };

  // useEffect hook to fetch details when the component mounts
  useEffect(() => {
    fetchDetails();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)
    setResponseMessage(''); // Clear any previous messages

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message || 'Detail saved successfully!');
        // Clear the form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
        fetchDetails(); // Re-fetch details to update the list
      } else {
        setResponseMessage(`Error: ${data.message || 'Something went wrong on the server.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('Error: Network error. Could not connect to the backend.');
    }
  };

  // ... rest of your return statement (JSX) ...
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header / Navbar */}
      <header className="w-full bg-blue-700 text-white shadow-md py-4 mb-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight">
            MERN Stack App
          </h1>
          <nav>
            {/* You can add navigation links here if your app grows */}
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Form to add new details */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-10 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add New Detail</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional):</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Save Detail
            </button>
          </form>

          {/* Display response messages */}
          {responseMessage && (
            <p className={`mt-6 text-center font-medium ${responseMessageColorClass}`}>
              {responseMessage}
            </p>
          )}
        </section>

        {/* Section to display all saved details */}
        <section className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Saved Details</h2>
          {details.length === 0 ? (
            <p className="text-center text-gray-600 italic">No details found. Add some above!</p>
          ) : (
            <ul className="space-y-4">
              {details.map((detail) => (
                <li key={detail._id} className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <p className="text-gray-900 font-bold text-lg mb-1">{detail.name}</p>
                  <p className="text-blue-600 text-sm mb-1">{detail.email}</p>
                  {detail.message && <p className="text-gray-700 text-base mb-2">"{detail.message}"</p>}
                  <p className="text-gray-500 text-xs text-right">
                    Added on: {new Date(detail.createdAt).toLocaleDateString()} at {new Date(detail.createdAt).toLocaleTimeString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;