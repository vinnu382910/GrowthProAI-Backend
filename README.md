# 🚀 GrowthProAI – Backend API

This is the backend API for the **Mini Local Business Dashboard**, built for the **Full Stack Intern Assignment** at **GrowthProAI**. It mimics how local businesses could retrieve customer insights like Google-like ratings, reviews, and AI-generated SEO headlines.

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **CORS**
- **dotenv**
- **Cohere AI** (for headline generation)
- No Database – Simulated values only

---

## 📁 Folder Structure

```

growthproai-backend/
├── controllers/             # Route logic (businessController.js)
├── routes/                  # API route definitions (businessRoutes.js)
├── utils/                   # Helper functions (generators.js, generateAIHeadline.js)
├── app.js                   # Express app setup
├── server.js                # Entry point
├── .env                     # Environment variables (not committed)
├── .gitignore
├── package.json
└── README.md

````

---

## ⚙️ Local Setup Instructions

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

Inside `.env`, add:

```env
PORT=5000
COHERE_API_KEY=your_actual_api_key_here
```

**Note**: Your `.env` is already listed in `.gitignore`, so your keys are safe from GitHub.

### 4. Run the Server

```bash
npm run dev   # For development with nodemon
# or
npm start     # For production
```

---

## 🌐 Deployed API

> 🟢 Base URL:

```
https://growthproai-backend.onrender.com
```

---

## 📡 API Endpoints

### 1. **POST** `/api/business-data`

> Returns mock review data + a static headline template.

**Full URL:**

```
https://growthproai-backend.onrender.com/api/business-data
```

#### ✅ Request Body (JSON):

```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

#### ✅ Response:

```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Hidden Gem in 2025"
}
```

* The `headline` here is **template-based**, not AI-generated.
* Ideal for initial page load or performance-favoring use cases.

---

### 2. **GET** `/api/regenerate-headline?name=...&location=...`

> Regenerates SEO headline using **Cohere AI**.

**Full URL Example:**

```
https://growthproai-backend.onrender.com/api/regenerate-headline?name=Cake%20&%20Co&location=Mumbai
```

#### ✅ Response:

```json
{
  "headline": "Delight in Every Bite – Discover Cake & Co in Mumbai Today!"
}
```

* This endpoint uses **Cohere's Command model** for dynamic, human-like text generation.
* Headline varies with each request (depending on temperature/randomness).
* Best for interactive UI buttons like "Regenerate SEO Headline".

---

## 🔍 Difference Between Endpoints

| Endpoint                   | Purpose                          | Headline Source          | Use Case                      |
| -------------------------- | -------------------------------- | ------------------------ | ----------------------------- |
| `/api/business-data`       | Return initial data and headline | Static Template Function | Fast, default homepage load   |
| `/api/regenerate-headline` | Return fresh SEO headline via AI | Cohere AI (dynamic)      | Button-triggered regeneration |

---

## 🔧 package.json Scripts

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## 🔐 Security

* `.env` is ignored via `.gitignore`
* `COHERE_API_KEY` is stored securely
* No secrets or credentials are exposed in GitHub or frontend

---

## ✨ Features

* 🔁 No database – fully simulated data
* ⚙️ Modular Express app with separate routes/controllers
* 🧠 AI headline generation via Cohere
* 📦 Easy to integrate with React frontend
* ✅ Clean error handling and response formats

---

## 🧪 Sample CURL Requests

### Get Business Data

```bash
curl -X POST https://growthproai-backend.onrender.com/api/business-data \
  -H "Content-Type: application/json" \
  -d '{"name": "Burger King", "location": "Hyderabad"}'
```

### Regenerate SEO Headline

```bash
curl "https://growthproai-backend.onrender.com/api/regenerate-headline?name=Burger%20King&location=Hyderabad"
```

---

## 📬 Submission Details

* **Author:** Vinay Kalva
* **Project:** GrowthProAI Full Stack Internship Task
* **Backend Deployment:** ✅ [Live API](https://growthproai-backend.onrender.com)

---

## 📄 License

This codebase is for learning/demo purposes only and not meant for production without modification.
