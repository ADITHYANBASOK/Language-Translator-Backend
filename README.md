# Language Translator App - Backend

A lightweight backend server built with Node.js and Express.js to handle text translation requests using an external translation API.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Handles text translation between multiple languages.
- Integrates with a Google Apps Script-based translation API.
- Cross-Origin Resource Sharing (CORS) enabled for client-side compatibility.
- Simple and extensible structure for additional functionalities.

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building RESTful APIs.
- **Axios**: For making HTTP requests to the external translation API.
- **CORS**: To handle cross-origin requests.

---

## Setup and Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/language-translator-backend.git
   cd language-translator-backend
2. Install dependencies:
   npm install
3. Start the server:
   npm start
