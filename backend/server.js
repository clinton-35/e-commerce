const dotenv = require('dotenv');
const app = require('./app');
const connectDatabase = require('./config/database');

// Load environment variables
dotenv.config({ path: 'backend/config/config.env' });  // Corrected path to config file if needed

// Connect to the database
connectDatabase();

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});
