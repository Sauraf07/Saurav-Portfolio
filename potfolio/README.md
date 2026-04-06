# Modern Personal Portfolio (Frontend Only)

A modern, responsive, and dynamic personal portfolio website built natively with **React**, **Bootstrap 5**, and **Framer Motion**.

## Features
- **Clean UI**: Beautiful custom design system and fluid typography using layout and utility classes directly from Bootstrap 5.
- **Fully Responsive**: Adapts seamlessly to all mobile, tablet, and desktop viewports.
- **Dark & Light Modes**: Features a dynamic environment theme toggle out-of-the-box leveraging Bootstrap's natively-supported `data-bs-theme`.
- **Dynamic Animations**: Smooth scroll reveals, hovering glass-pane cards, and interactive loaders driven by `Framer Motion`.
- **Static Site Rendering Ready**: All components (`Projects`, `Achievements`, `Contact`) have been completely decoupled from any external database/backend dependency, making it instantly deployable anywhere as a completely decoupled static website!

---

## 📂 Folder Structure
The website follows a clean standalone React footprint within `frontend/`:
```text
portfolio/
└── frontend/               # React (Vite) Application
    ├── public/             # Static assets
    ├── src/
    │   ├── components/     # Scalable layout domains (Hero, projects, achievements)
    │   ├── index.css       # Bootstrap overrides and native animations
    │   ├── main.jsx        # Bootstrap dependency imports
    │   └── App.jsx         # Global view & Layout wrapper
    └── package.json        
```

---

## 🚀 Step-by-Step Instructions to Run Locally

### 1. Requirements
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v16 or higher)

### 2. Setting up the Application
1. Open a terminal and navigate to the application folder.
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev -- --force
   ```
4. Open the displayed URL (usually `http://localhost:5173`) in your browser to view the portfolio.

---

## 🌩️ Deployment Guide (Vercel, Netlify, or GitHub Pages)
Since this portfolio relies on absolutely no external backend dependency and does not require active server-side process pooling, it can be deployed nearly anywhere for free!

### Deploying the Frontend (Vercel example)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repository.
4. Set the **Root Directory** to `frontend`.
5. Vercel automatically detects Vite framework configurations and builds using `npm run build`.
6. Deploy! 

Your frontend-only portfolio is now securely up and running in minutes!
