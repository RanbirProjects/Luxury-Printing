# Luxury Printing Services

A modern, elegant web application for luxury printing services built with the MERN stack.

## Features

- Beautiful, responsive design with luxury-themed UI
- Product catalog with high-quality images
- Shopping cart functionality
- User authentication
- Contact form
- FAQ section

## Tech Stack

- Frontend: React.js with Material-UI
- State Management: Redux Toolkit
- Backend: Node.js with Express
- Database: MongoDB
- Styling: Styled Components

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/RanbirProjects/Luxury-Printing.git
```

2. Install dependencies:
```bash
cd Luxury-Printing
npm install
cd client
npm install
```

3. Start the development server:
```bash
# Start backend server (from root directory)
npm start

# Start frontend server (from client directory)
cd client
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
luxury-printing/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/               # React source files
│       ├── components/    # Reusable components
│       ├── pages/         # Page components
│       ├── redux/         # Redux store and slices
│       └── styles/        # Shared styles
└── server/                # Backend Express application
    ├── controllers/       # Route controllers
    ├── models/           # Database models
    └── routes/           # API routes
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 