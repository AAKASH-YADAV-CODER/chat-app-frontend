# Chat Application

This is a full-stack chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), Redux Toolkit for global state management, and Socket.io for real-time communication. Custom hooks and context are utilized for authentication and protected routes.

## Features

- **Real-time Chat:** Utilizes Socket.io for real-time messaging between users.
- **Global State Management:** Redux Toolkit is used for managing global state, ensuring a smooth user experience.
- **Authentication:** Custom hooks and context provide secure authentication functionality.
- **Protected Routes:** Certain routes are protected to ensure privacy and security for users.
- **Responsive Design:** The application is fully responsive, providing a seamless experience across devices.

## Technologies Used

- **Frontend:** React.js, Redux Toolkit, Socket.io client
- **Backend:** Node.js, Express.js, Socket.io, MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Styling:** CSS, Styled Components

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account for database (or local MongoDB setup)

### Installation

1. Clone the repository:

git clone ->  https://github.com/AAKASH-YADAV-CODER/chat-app-frontend.git


2. Install dependencies:

cd your-repo
npm install


3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

VITE_APP_API_URL=YOUR_BACKEND_API_URL
VITE_APP_SOCKET_URL=YOUR_SOCKET_SERVER_URL


4. Run the development server:

npm start


## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any bugs or feature requests.

## Acknowledgments

- This project was inspired by [As a Programmer].
