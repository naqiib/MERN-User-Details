# MERN-User-Details

## 📝 Simple MERN Stack Form Application

This project is a foundational full-stack application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It demonstrates a basic form for collecting user details (name, email, and an optional message) and displaying them. This serves as a great starting point for understanding how these technologies integrate to create a complete web application.

---

### ✨ Features

* **User Detail Submission:** A simple form to input and submit user information.
* **Data Persistence:** Submitted details are stored securely in a MongoDB Atlas database.
* **Dynamic Display:** Fetches and displays all saved details from the database in real-time.
* **Client-Side Validation:** Basic form validation in the React frontend.
* **Server-Side Validation:** Backend validation for required fields (name, email) and unique email addresses.
* **Responsive Design:** (Basic responsiveness with Tailwind CSS)

---

### 🚀 Technologies Used

**Frontend:**
* **React.js:** A JavaScript library for building user interfaces.
* **Vite:** (Or Create React App, depending on how your project was initialized) A fast build tool for modern web projects.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **Fetch API:** For making HTTP requests to the backend.

**Backend:**
* **Node.js:** A JavaScript runtime environment.
* **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
* **Mongoose:** An elegant MongoDB object modeling for Node.js.
* **Dotenv:** For loading environment variables from a `.env` file.
* **CORS:** Middleware to enable Cross-Origin Resource Sharing.

**Database:**
* **MongoDB Atlas:** A cloud-hosted NoSQL database service.

---

### 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

* [**Node.js**](https://nodejs.org/en/download/) (LTS version recommended)
* [**npm**](https://www.npmjs.com/get-npm) (comes with Node.js)
* [**Git**](https://git-scm.com/downloads)
* A **MongoDB Atlas Account** (to host your database)
* [**Postman**](https://www.postman.com/downloads/) (Optional, but recommended for API testing)

---

### ⚙️ Installation & Setup

Follow these steps to get the project up and running on your local machine:

**1. Clone the Repository**

```bash
git clone [https://github.com/naqiib/MERN-User-Details.git](https://github.com/naqiib/MERN-User-Details.git)
cd MERN-User-Details # Navigate to the project root directory
Project Structure
.
├── backend/                  # Node.js/Express Backend
│   ├── config/               # Database connection setup
│   │   └── db.js
│   ├── controllers/          # Business logic for routes
│   │   └── detailController.js
│   ├── models/               # Mongoose schemas and models
│   │   └── Detail.js
│   ├── routes/               # API routes
│   │   └── details.js
│   ├── .env.example          # Example .env file
│   ├── index.js              # Main backend entry point
│   ├── package.json
│   └── ...
├── my-project/               # React Frontend (e.g., created with Create React App/Vite)
│   ├── public/
│   ├── src/
│   │   ├── App.js            # Main React component
│   │   ├── index.css         # Tailwind CSS imports + global styles
│   │   ├── index.js          # React app entry point
│   │   └── ...
│   ├── package.json
│   ├── tailwind.config.js
│   └── ...
├── .gitignore                # Specifies intentionally untracked files to ignore
├── README.md                 # This file
└── package.json              # Main project-level package.json (if you have one, or ju
