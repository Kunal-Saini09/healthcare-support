const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/healthcare-support';

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Request logger to debug form submissions
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
if (!MONGODB_URI) {
    console.error('ERROR: MONGODB_URI is not set. Please set it in your environment variables.');
} else {
    mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
}

// Schemas and Models
const patientSupportSchema = new mongoose.Schema({
    name: String,
    email: String,
    issue: String,
    submittedAt: { type: Date, default: Date.now }
});
const PatientSupport = mongoose.model('PatientSupport', patientSupportSchema);

const volunteerSchema = new mongoose.Schema({
    name: String,
    email: String,
    skills: String,
    availability: String,
    submittedAt: { type: Date, default: Date.now }
});
const Volunteer = mongoose.model('Volunteer', volunteerSchema);

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    submittedAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/submit-patient-support', async (req, res) => {
    try {
        console.log('Received patient support request:', req.body);
        const { name, email, issue } = req.body || {};
        if (!name || !email || !issue) {
            console.error('Validation failed for patient support:', req.body);
            return res.status(400).json({ error: 'Missing required fields.' });
        }
        const newSubmission = new PatientSupport({ name, email, issue });
        await newSubmission.save();
        console.log('Patient support saved successfully');
        res.status(200).json({ message: 'Patient support submitted successfully!' });
    } catch (error) {
        console.error('Error submitting patient support:', error);
        res.status(500).json({ error: 'Error submitting patient support.' });
    }
});

app.post('/submit-volunteer', async (req, res) => {
    try {
        console.log('Received volunteer request:', req.body);
        const { name, email, skills, availability } = req.body || {};
        if (!name || !email || !skills || !availability) {
            console.error('Validation failed for volunteer:', req.body);
            return res.status(400).json({ error: 'Missing required fields.' });
        }
        const newSubmission = new Volunteer({ name, email, skills, availability });
        await newSubmission.save();
        console.log('Volunteer registration saved successfully');
        res.status(200).json({ message: 'Volunteer registration submitted successfully!' });
    } catch (error) {
        console.error('Error submitting volunteer registration:', error);
        res.status(500).json({ error: 'Error submitting volunteer registration.' });
    }
});

app.post('/submit-contact', async (req, res) => {
    try {
        console.log('Received contact request:', req.body);
        const { name, email, message } = req.body || {};
        if (!name || !email || !message) {
            console.error('Validation failed for contact:', req.body);
            return res.status(400).json({ error: 'Missing required fields.' });
        }
        const newSubmission = new Contact({ name, email, message });
        await newSubmission.save();
        console.log('Contact form saved successfully');
        res.status(200).json({ message: 'Contact form submitted successfully!' });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ error: 'Error submitting contact form.' });
    }
});

// Global error handler for unexpected issues
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// Start Server (only listen if not on Vercel)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

// Export for Vercel serverless
module.exports = app;