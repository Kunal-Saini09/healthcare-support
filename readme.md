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

The platform includes an integrated **FAQ Chatbot** that provides instant responses to common healthcare queries:

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
- Ensure you've set the environment variable in Vercel dashboard
- Redeploy after setting it

**Forms not submitting**
- Check Vercel logs: `vercel logs`
- Verify MongoDB Atlas allows connections from Vercel's IP (0.0.0.0/0)

**Static files not loading**
- Ensure `/public` folder exists and has all files
- Check `vercel.json` routes are correct

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
