const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS so the static files can be fetched easily
app.use(cors());

// Serve the current directory as static files.
// This allows fetching the index.html, JS, CSS, and all PDF certificates via HTTP.
app.use(express.static(__dirname));

// Optional: API endpoint to check backend status
app.get('/api/status', (req, res) => {
    res.json({ status: 'online', message: 'Fusion Fest 2026 Backend is running!' });
});

app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`✅ Backend Server is successfully running!`);
    console.log(`➡️  Access the portal at: http://localhost:${PORT}`);
    console.log(`====================================================`);
    console.log(`Hosted static files and certificates are now accessible via code.`);
    console.log(`Press Ctrl+C to stop the server.`);
});
