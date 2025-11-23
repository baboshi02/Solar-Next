
---

# ☀️ Solar Load Calculator & AI-Optimized Solar System Recommender

A modern, interactive **Next.js** application that allows users to calculate their daily electrical load and automatically receive the **best solar system recommendation powered by AI**.
Users can enter appliances, wattage, and usage hours — the app computes the load and sends the data to an AI backend that suggests the most efficient solar setup.

---

## ✨ Features

### 🔢 Load Calculator

* Add unlimited appliances dynamically
* Input name, watt consumption, and daily usage
* Clean and responsive UI built with **TailwindCSS**, **Framer Motion**, and **shadcn/ui**

### 🤖 AI-Powered Solar System Recommendation

* Returns a structured AI response (battery size, panel watts, inverter rating, etc.)
* Displays results in a clean summary card

### 🪄 Smooth UI & UX

* Beautiful animations
* Modern card layout
* Auto-expanding load list
* Mobile-friendly design

### 🏗️ Tech Stack

* **Next.js App Router**
* **React + TailwindCSS**
* **shadcn/ui** components
* **Framer Motion**
* **Google Gemini API** 

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/baboshi02/Solar-Next.git
cd Solar-Next
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Add Environment Variables

Create `.env.local`:

```env
MONGODB_URI="MONGOURL"
SESSION_KEY="SESSION_KEY"
GEMINI_API_KEY="GEMINI_API_KEY"
```

Add more config depending on your Ask-AI route.

---

## ▶️ Running the App

### Development

```bash
npm run dev
```

The app will start at:

```
http://localhost:3000
```

---


## 📄 License

MIT License. Free for personal and commercial use.



Just tell me!
