# 🚀 GrowthProAI – Backend API

This is the backend API for the **Mini Local Business Dashboard**, built as part of the Full Stack Intern Assignment for **GrowthProAI**. It simulates how local businesses might view their Google-like reviews and AI-generated SEO headlines.

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **CORS**
- **dotenv**

---

## 📁 Folder Structure

```

growthproai-backend/
├── controllers/           # Route logic (businessController.js)
├── routes/                # API route definitions (businessRoutes.js)
├── utils/                 # Helper functions (generators.js)
├── app.js                 # Express app setup
├── server.js              # Server entry point
├── .env                   # Environment variables
├── .gitignore
├── package.json
└── README.md

````

---

## ⚙️ Setup Instructions (Local)

### 1. Clone the Repository

```bash
git clone https://github.com/vinnu382910/GrowthProAI-Backend.git
cd growthproai-backend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

```bash
touch .env
```

Inside `.env`:

```
PORT=5000
```

### 4. Run the Server

#### For development with live reload:

```bash
npm run dev
```

#### For production:

```bash
npm start
```

---

## 🌐 Deployed API URL

> 🟢 The backend is live at:

```
https://growthproai-backend.onrender.com
```

---

## 📡 API Endpoints

### 1. **POST** `/api/business-data`

**Full URL:**

```
https://growthproai-backend.onrender.com/api/business-data
```

**Request Body (JSON):**

```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

**Response:**

```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Hidden Gem in 2025"
}
```

---

### 2. **GET** `/api/regenerate-headline?name=...&location=...`

**Full URL Example:**

```
https://growthproai-backend.onrender.com/api/regenerate-headline?name=Cake%20&%20Co&location=Mumbai
```

**Response:**

```json
{
  "headline": "Customers Love Cake & Co in Mumbai – Rated #1 in 2025"
}
```

---

## 🔧 Scripts in `package.json`

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## ✨ Features

* 🔁 No database – fully simulated dynamic responses
* 🧠 Smart, AI-style SEO headline generation from static templates
* 📦 Modular Express structure (controllers, routes, utils)
* 🌍 CORS-enabled – ready for React frontend integration

---

## 📬 Submission

* **Author:** Vinay Kalva
* **Assignment:** Full Stack Intern Task – GrowthProAI
* **Backend Deployment:** ✅ [View API Live](https://growthproai-backend.onrender.com)

---

## 📄 License

This project is for assignment/demo purposes only and not intended for production use.
