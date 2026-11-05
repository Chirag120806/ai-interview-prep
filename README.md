# INTERVIEWAI 🚀
### AI-Powered Interview Preparation Platform

**Prepare Smarter. Interview Better.**

INTERVIEWAI is an AI-powered interview preparation platform that helps candidates prepare for job interviews by analyzing their resumes, self-descriptions, and job descriptions. It uses Google's Gemini AI to generate personalized interview questions, identify skill gaps, evaluate job compatibility, and provide actionable preparation plans.

---

## 🌟 Features

- **AI-Powered Resume Analysis:** Upload your PDF resume and get an AI-driven analysis of your professional profile.
- **Job Description Matching:** Analyze how well your skills and experience match a specific job description.
- **Match Score:** Get a compatibility score (0–100) based on your profile and the target job.
- **Technical Interview Questions:** Generate personalized technical questions based on the job requirements and your skills.
- **Behavioral Interview Questions:** Prepare for HR and behavioral interview rounds.
- **Skill Gap Analysis:** Identify missing skills and areas that require improvement.
- **Personalized Preparation Plan:** Get actionable recommendations to improve your interview readiness.
- **Report Generation:** Generate and retrieve structured AI-powered interview reports.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- Axios
- React Router
- HTML5
- SCSS / CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Multer (File Upload)
- Google Gemini AI
- Google GenAI SDK
- Zod (Schema Validation)

---

## 📂 Project Structure

```text
INTERVIEWAI/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── assets/
│   ├── package.json
│   └── index.html
│
├── .gitignore
└── README.md
```

---

## ⚙️ How It Works

1. **Enter Job Description:** Paste the job description of the position you are applying for.
2. **Describe Yourself:** Provide your professional background, skills, and experience.
3. **Upload Resume:** Upload your resume in PDF format.
4. **AI Processing:** The backend processes the uploaded information and sends it to Google's Gemini AI.
5. **Report Generation:** The AI generates a structured interview preparation report.
6. **Review Results:** View your match score, technical questions, behavioral questions, skill gaps, and preparation plan.

---

## 🚀 Getting Started

Follow these instructions to run INTERVIEWAI locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Chirag120806/ai-interview-prep.git
```

```bash
cd ai-interview-prep
```


### 2. Backend Setup

Navigate to the backend directory:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the Backend directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=use_a_long_random_secret
GOOGLE_GENAI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:5173
```

Make sure the environment variable names match those used in your backend configuration.

Start the backend server using the start script configured in your `package.json`:

```bash
npm start
```

### 3. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend development server using the script configured in your `package.json`:

```bash
npm run dev
```

### 4. Open the Application

Open the local frontend URL displayed in your terminal.

The backend API runs on:

```text
http://localhost:3000
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/interview` | Generate an AI interview report |
| GET | `/api/interview` | Retrieve interview records |
| GET | `/api/interview/report/:interviewId` | Retrieve a specific interview report |

### Generate Interview Report

**Endpoint:**

```http
POST /api/interview
```

**Request Content-Type:**

```text
multipart/form-data
```

**Request Fields:**

| Field | Description |
|---|---|
| `jobDescription` | Target job description |
| `selfDescription` | Candidate's professional introduction |
| `resume` | Candidate's PDF resume |

---

## 📊 AI-Generated Report

The generated interview report contains the following sections:

| Parameter | Description |
|---|---|
| `matchScore` | Job profile compatibility score |
| `technicalQuestions` | Personalized technical interview questions |
| `behavioralQuestions` | HR and behavioral interview questions |
| `skillGaps` | Skills that need improvement |
| `preparationPlan` | Personalized interview preparation strategy |

---

## 🔐 Environment Variables

Never commit your actual `.env` file or expose API keys in your GitHub repository.

| Variable | Purpose |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB database connection string |
| `JWT_SECRET` | Long, random secret used to sign authentication tokens |
| `GOOGLE_GENAI_API_KEY` | Google Gemini AI API key |
| `CLIENT_URL` | Comma-separated frontend origin(s) allowed by CORS |
| `COOKIE_SAME_SITE` | Use `none` for separately hosted frontend/API over HTTPS; otherwise use `lax` |

---

## 🚢 Deployment

Deploy `Backend` as a Node web service with build command `npm ci` and start command `npm start`. Configure all variables from `Backend/.env.example`; use the platform-provided `PORT` when available. The health-check endpoint is `GET /health`.

Deploy `Frontend` as a static Vite site with build command `npm ci && npm run build` and publish directory `dist`. Set `VITE_API_URL` to the public HTTPS URL of the backend before building.

When frontend and backend are on different domains, both must use HTTPS, `CLIENT_URL` must exactly match the frontend origin, and `COOKIE_SAME_SITE=none` is required for sign-in cookies.

The API includes a basic per-instance rate limit for authentication and report generation. If you run multiple backend instances, also configure rate limiting at your hosting provider or API gateway.

---

## 🔮 Future Improvements

- Interactive mock interview sessions.
- AI-powered answer evaluation.
- Voice-based interview practice.
- Real-time feedback and performance tracking.
- Interview history and progress dashboard.
- More detailed resume recommendations.

---

## 👨‍💻 Author

**Chirag Thareja**

B.Tech – Computer Science and Information Technology

**Areas of Interest:** Data Science | Machine Learning | Artificial Intelligence | Full Stack Development

- GitHub: [Chirag120806](https://github.com/Chirag120806)
- LinkedIn: [(https://www.linkedin.com/)](https://www.linkedin.com/in/chirag-thareja-62b401349/)

---

## ⭐ Support

If you find INTERVIEWAI useful, consider giving this repository a ⭐ on GitHub!

**INTERVIEWAI – Prepare Smarter. Interview Better.**
