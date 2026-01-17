# Healthcare Support Portal

A web-based platform designed to connect patients, volunteers, and healthcare providers, providing comprehensive support services and community engagement for healthcare accessibility and awareness.

## 🎯 Vision

To create an inclusive healthcare support ecosystem that bridges the gap between patients seeking medical assistance and volunteers willing to help, while leveraging AI-powered chatbot support for immediate medical information and guidance.

---

## 📁 Project Structure

```
healthcare-support/
├── public/                 # Frontend static files
│   ├── index.html         # Home page with all forms (Patient, Volunteer, Contact)
│   ├── patient.html       # Dedicated patient support page
│   ├── volunteer.html     # Dedicated volunteer registration page
│   ├── contact.html       # Dedicated contact us page
│   ├── script.js          # Main JavaScript file (form handlers & chatbot)
│   ├── global.css         # Global styling
│   ├── health.png         # Health-related image asset
│
├── server.js              # Express.js server & MongoDB connection
├── package.json           # Node.js dependencies
├── .env.local             # Environment variables (MongoDB URI, etc.)
├── .gitignore             # Git ignore rules
├── readme.md              # This file
└── node_modules/          # Installed dependencies

```

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js (v5.2.1)** - Web framework for REST APIs
- **MongoDB** - NoSQL database for data persistence
- **Mongoose (v9.1.4)** - ODM (Object Data Modeling) for MongoDB

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - Client-side form handling and interactivity

### Middleware
- **CORS (v2.8.5)** - Cross-Origin Resource Sharing for API access
- **Body Parser (v2.2.2)** - JSON parsing middleware

---

## 🤖 AI-Powered Chatbot Feature
The platform includes an integrated **AI Chatbot** powered by **Google Gemini** that provides intelligent responses to healthcare queries:

### Google Gemini AI Integration

**Google Gemini** is an advanced generative AI model developed by Google that powers the chatbot's intelligent responses. The integration provides:

#### Features
- **Natural Language Understanding** - Comprehends complex healthcare questions in natural language
- **Context-Aware Responses** - Provides accurate, relevant healthcare information
- **Conversation History** - Maintains chat history for better context understanding
- **Multi-turn Conversations** - Supports back-and-forth dialogue for clarification
- **Healthcare Focus** - Trained to respond helpfully to health, symptoms, vaccines, appointments, and volunteering queries

#### How Gemini AI Works in This Project

1. **Model Used**: Google Gemini (via `@google/generative-ai` SDK)
2. **API Integration**: 
   - Requires `GOOGLE_API_KEY` in `.env` file
   - Uses Google's Generative AI API (`generativelanguage.googleapis.com`)
3. **Chat Session Management**: 
   - Maintains conversation history per user session
   - Allows context-aware multi-turn conversations
   - Stores history in-memory (can be extended to database)

#### Environment Setup
To enable Google Gemini AI:

```env
GOOGLE_API_KEY=your_google_api_key_here
```

**Get your API Key**:
1. Visit [Google AI Studio](https://aistudio.google.com)
2. Create a new API key
3. Add it to your `.env` file
4. Restart the server

#### Request/Response Format
```javascript
// Client Request
POST /api/chatbot
{
  "message": "What are the symptoms of fever?",
  "sessionId": "user123"  // Optional, defaults to 'default'
}

// Server Response
{
  "response": "Fever symptoms typically include elevated body temperature above 98.6°F (37°C), along with chills, body aches, headache, and fatigue..."
}
```

#### Fallback System
If Gemini API is unavailable or encounters errors, the chatbot automatically falls back to a keyword-matching FAQ system with responses for:
- Symptoms
- Vaccines
- Appointments
- Volunteering
- General health questions

### Legacy Chatbot CapabilitiesThe platform includes an integrated **FAQ Chatbot** that provides instant responses to common healthcare queries:

### Chatbot Capabilities
- **Symptom Information** - Quick reference for common symptoms
- **Vaccine Guidance** - Information on vaccine availability and eligibility
- **Appointment Booking** - Guidance on scheduling medical appointments
- **Volunteer Information** - Details on becoming a volunteer
- **Smart Fallback** - Directs users to support channels for unmatched queries

### How It Works
The chatbot uses keyword matching to identify user intent and provides relevant FAQs. Future enhancements can integrate:
- NLP (Natural Language Processing) for better intent recognition
- ML models for predictive health information
- Integration with healthcare APIs for real-time data

---

## 🏥 NGO Use-Case & Social Impact

### Primary Beneficiaries
1. **Patients** - Access free/affordable healthcare support and guidance
2. **Volunteers** - Opportunities to contribute to community health
3. **Healthcare Providers** - Reach broader populations through the platform
4. **NGOs** - Data-driven insights into community health needs

### Key Functionalities

#### Patient Support
- Submit health concerns and receive support/resources
- Track submitted issues
- Access AI-powered health information
- Connect with volunteer support network

#### Volunteer Management
- Easy registration process for healthcare volunteers
- Skills tracking (nurses, counselors, translators, etc.)
- Availability scheduling for patient support
- Impact tracking and recognition system

#### Community Engagement
- Contact form for partnerships and inquiries
- Feedback collection from patients and volunteers
- Resource sharing and awareness campaigns

### Social Impact Goals
- ✅ **Accessibility** - Bring healthcare information to underserved communities
- ✅ **Affordability** - Free platform reduces barriers to healthcare guidance
- ✅ **Community Building** - Connect volunteers with those in need
- ✅ **Data Insights** - Understand community health patterns for targeted interventions
- ✅ **Scalability** - Deploy across multiple regions/languages with minimal cost

---

## 📊 Database Schema

### Collections

#### 1. PatientSupport
```javascript
{
  name: String,
  email: String,
  issue: String,
  submittedAt: Date (default: current timestamp)
}
```

#### 2. Volunteer
```javascript
{
  name: String,
  email: String,
  skills: String,
  availability: String,
  submittedAt: Date (default: current timestamp)
}
```

#### 3. Contact
```javascript
{
  name: String,
  email: String,
  message: String,
  submittedAt: Date (default: current timestamp)
}
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthcare-support
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file:
   ```env
   MONGODB_URI=mongodb://localhost:27017/healthcare-support
   PORT=3000
   ```

4. **Start MongoDB**
   ```bash
   mongod --dbpath="C:\data\db"  # Windows
   mongod --dbpath="/data/db"    # Linux/Mac
   ```

5. **Start the server**
   ```bash
   npm start
   ```

6. **Access the application**
   Open browser and navigate to `http://localhost:3000`

---

## 📋 API Endpoints

### POST Routes

#### 1. Submit Patient Support
```
POST /submit-patient-support
Content-Type: application/json

Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "issue": "Persistent headaches for 3 days"
}

Response:
{
  "message": "Patient support submitted successfully!"
}
```

#### 2. Register Volunteer
```
POST /submit-volunteer
Content-Type: application/json

Body:
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "skills": "Nursing, Patient Counseling",
  "availability": "Weekends"
}

Response:
{
  "message": "Volunteer registration submitted successfully!"
}
```

#### 3. Submit Contact Form
```
POST /submit-contact
Content-Type: application/json

Body:
{
  "name": "Organization Lead",
  "email": "org@example.com",
  "message": "Interested in partnership"
}

Response:
{
  "message": "Contact form submitted successfully!"
}
```

---

## 🔧 Features & Functionality

### Current Features
- ✅ Multi-form submission system
- ✅ MongoDB data persistence
- ✅ AI Chatbot with FAQ support
- ✅ Responsive UI design
- ✅ Form validation (client & server-side)
- ✅ Error handling and logging
- ✅ CORS support for future API integration

### Future Enhancement Ideas
- 🔄 User authentication & profiles
- 📊 Admin dashboard for analytics
- 🌐 Multi-language support
- 📅 Appointment scheduling system
- 🎓 Healthcare literacy modules

---

## 🔐 Security Considerations

### Current Implementation
- CORS enabled for cross-origin requests
- Input validation on server-side
- MongoDB injection prevention via Mongoose
- Error handling to prevent information leakage

### Recommendations for Production
- Implement JWT authentication
- Use HTTPS/SSL encryption
- Rate limiting on API endpoints
- Data encryption at rest
- Regular security audits
- Implement logging and monitoring
- Use environment variables for sensitive data

---

## 🧪 Testing & Troubleshooting

### Common Issues

**MongoDB Connection Error**
```
Error: The `uri` parameter to `openUri()` must be a string
```
**Solution:** Ensure MongoDB is running and `MONGODB_URI` is set correctly in `.env.local`

**Form Submission Returns 500**
**Solution:** Check server logs for validation errors; ensure all required fields are filled

**Static Files Not Loading**
**Solution:** Verify files are in `/public` directory; restart server

---

---

## 🚢 Deployment

### Deploy to Vercel (Recommended for Production)

Vercel provides free hosting for Node.js applications with automatic SSL, custom domains, and serverless functions.

#### Step 1: Prepare MongoDB Atlas (Cloud Database)
Since Vercel runs serverless functions, local MongoDB won't work. Use MongoDB Atlas instead:

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a free account and cluster
3. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/healthcare-support`
4. Keep this string safe - you'll need it for environment variables

#### Step 2: Prepare Your Repository
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/healthcare-support.git
   git push -u origin main
   ```

2. Ensure `vercel.json` exists (already created in this project)

#### Step 3: Deploy to Vercel
**Option A: Using Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: healthcare-support
# - Framework: Other
```

**Option B: Using Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Import"

#### Step 4: Set Environment Variables
1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add the following:
   - **Name:** `MONGODB_URI`
   - **Value:** Your MongoDB Atlas connection string
   - Click "Add"

4. Redeploy to apply changes:
   ```bash
   vercel --prod
   ```

#### Step 5: Verify Deployment
- Your app is now live at: `https://healthcare-support.vercel.app`
- Test form submission on the deployed site
- Check Vercel logs if there are any issues:
  ```bash
  vercel logs
  ```

### Troubleshooting Vercel Deployment

**Error: MONGODB_URI is undefined**
- Check Vercel dashboard → Settings → Environment Variables
- Ensure `MONGODB_URI` is set to your MongoDB Atlas connection string
- Redeploy: `vercel --prod`
- Verify in Vercel logs: `vercel logs`

**Error: Cannot find module or 404 on static files**
- Ensure `/public` folder with all HTML/CSS/JS files is committed to Git
- Verify `vercel.json` routing is correct
- Rebuild deployment: Delete from Vercel dashboard and redeploy

**Forms not submitting / 500 Internal Server Error**
- Check Vercel logs: `vercel logs`
- Verify MongoDB Atlas connection string in environment variables
- Check if MongoDB Atlas allows Vercel IPs (whitelist: 0.0.0.0/0)
- Test with `curl` or Postman to debug API

**"Cannot GET /" error**
- Ensure `index.html` is in `/public` folder
- Check that `app.use(express.static(...))` is in server.js

**Static files return 404**
- Verify all files are in `/public/` directory
- Check file names (case-sensitive on Linux servers)
- Clear Vercel cache and redeploy

**MongoDB connection times out**
- Verify connection string format: `mongodb+srv://user:pass@cluster.mongodb.net/dbname`
- Ensure password doesn't have special characters (if so, URL-encode them)
- Check MongoDB Atlas firewall: Network Access → IP Whitelist → Allow from Anywhere (0.0.0.0/0)

### Quick Debug Commands

```bash
# View Vercel logs in real-time
vercel logs

# Check environment variables
vercel env ls

# Redeploy to production
vercel --prod

# Remove old deployment
vercel remove
```

### Local Development with MongoDB Atlas
If you want to test with the cloud database locally:

1. Update `.env.local`:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/healthcare-support
   PORT=3000
   ```

2. Run locally:
   ```bash
   npm start
   ```

---

## 📞 Support & Contribution

### For NGOs & Social Organizations
This platform is built with NGOs and healthcare organizations in mind. We welcome:
- Feature requests from field teams
- Feedback from patient communities
- Volunteer coordination models
- Data insights and use-cases

### Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes with clear messages
4. Submit pull request

---

## 📜 License

ISC License - Free to use for educational and non-profit purposes

---

## 📧 Contact

For inquiries about deploying this solution for your NGO or healthcare initiative, please reach out through the Contact Form on the platform or create an issue in the repository.

---

**Last Updated:** January 16, 2026
**Version:** 1.0.0
