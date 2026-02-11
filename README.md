# 🤖 AI Personal Assistant

A full-stack AI-powered personal assistant web app where users can create and customize their own assistant, then interact with it using natural language commands.

🔗 **Live Demo:** [my-assistant-3ndz.onrender.com](https://my-assistant-3ndz.onrender.com/signup)

---

## ✨ Features

- 🔐 **Authentication** — Secure signup/login with JWT and HTTP-only cookies
- 🎨 **Customize Your Assistant** — Set a name and upload a profile image for your assistant
- 🧠 **AI-Powered Commands** — Talk to your assistant in natural language powered by Google Gemini AI
- 📅 **Date & Time** — Ask for current date, time, day, month, or year
- 🔍 **Google Search** — Opens Google search results for your query
- 📺 **YouTube** — Search or play videos on YouTube
- 🌤️ **Weather** — Get weather information
- 📱 **App Shortcuts** — Open Instagram, Facebook, Calculator instantly
- 💬 **General Conversation** — Chat with your assistant naturally
- 📝 **Command History** — All your commands are saved to your profile

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React + Vite | UI framework |
| Tailwind CSS | Styling |
| React Router | Client-side routing |
| Axios | HTTP requests |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database |
| JWT + bcryptjs | Authentication & password hashing |
| Multer | File upload handling |
| Cloudinary | Cloud image storage |
| Google Gemini AI | Natural language processing |
| Moment.js | Date & time formatting |

---
## 📖 How to Use the App

### Step 1 — Create an Account
- Visit the [live app](https://my-assistant-3ndz.onrender.com/signup)
- Enter your **name**, **email**, and **password** (min 6 characters)
- Click **Sign Up** to create your account

### Step 2 — Name Your Assistant
- After signing up you'll be taken to the **Customize** page
- Type a name for your assistant (e.g. *Jarvis*, *Nova*, *Max*)
- Click **Next** to proceed

### Step 3 — Give Your Assistant a Face
- Upload a custom image for your assistant **or** choose from preset avatars
- Click **Save** to finalize your assistant's profile
- You'll be redirected to the **Home** page

### Step 4 — Start Chatting!
Type commands in the input box and hit send. Here are some things you can say:

| What you say | What happens |
|---|---|
| `"Who created you?"` | Provide creater Name |
| `"What time is it?"` | Returns the current time |
| `"What's today's date?"` | Returns today's date |
| `"Search for React tutorials"` | Opens Google search |
| `"Play Bollywood songs on YouTube"` | Opens YouTube |
| `"Open Instagram"` | Opens Instagram |
| `"Open calculator"` | Opens calculator |
| `"Show weather"` | Shows weather info |
| `"Tell me a joke"` | General conversation |

### Step 5 — Update Your Assistant Anytime
- Go to **Settings / Customize** to change your assistant's name or image anytime

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Cloudinary account
- Google Gemini API key

### 1. Clone the repository
```bash
git clone https://github.com/shivamanand9009/My-Assistant.git
cd My-Assistant
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GEMINI_API_KEY=your_gemini_api_key
```

```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

App runs at `http://localhost:5173`


## 👤 Author

**Shivam Anand**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/shivam-anand-649878228/)
[![GitHub](https://img.shields.io/badge/GitHub-black?style=flat&logo=github)](https://github.com/shivamanand9009)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
