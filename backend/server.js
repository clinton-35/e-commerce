const dotenv = require('dotenv');
const app = require('./app');
const connectDatabase = require('./config/database');

//Handle Uncaught Exceptions
process.on('UncaughtException', err => {
    console.log(`Error: ${err.stack}`);
    console.log('Shutting down server due to Uncaught Exception');
    process.exit(1)
})


// Load environment variables
dotenv.config({ path: 'backend/config/config.env' });  // Corrected path to config file if needed

// Connect to the database
connectDatabase();

// Start the server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});


//Handle unhandled promise rejections

process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise Rejection')
    server.close(() => {
        process.exit(1);
    })
})