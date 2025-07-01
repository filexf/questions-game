# Questions Game

A simple Q&A game built with React, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 Live Demo

👉 [questions-game-snowy.vercel.app](https://questions-game-snowy.vercel.app/)

---

## 🛠️ Stack

- **React 19** — UI library
- **TypeScript** — Type safety
- **Vite** — Lightning-fast build tool
- **Tailwind CSS v4** — Utility-first CSS framework

---

## 📁 Folder Structure

```
questions-game/
├── public/                # Static files (favicon, images, etc.)
│   └── dataleon-favicon.png
├── src/                   # Source code
│   ├── App.tsx            # Main React component
│   ├── App.test.tsx       # Unit tests for App (Vitest)
│   ├── setupTests.ts      # Test setup for Vitest/Testing Library
│   ├── index.css          # Tailwind CSS directives
│   ├── main.tsx           # App entry point
│   ├── data/
│   │   └── questions.ts   # Questions and answers data
│   └── assets/            # Static assets (e.g. logos)
├── index.html             # Main HTML file
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── tsconfig.json          # TypeScript base config
├── tsconfig.app.json      # TypeScript config for app
├── tsconfig.node.json     # TypeScript config for Node
└── README.md              # This file
```

---

## 🖥️ Installation & Local Launch

1. **Clone the repository**
   - **SSH**
     ```bash
     git clone git@github.com:filexf/questions-game.git
     ```
   - **HTTPS**
     ```bash
     git clone https://github.com/filexf/questions-game.git
     ```
     Ensuite, placez-vous dans le dossier du projet :
   ```bash
   cd questions-game
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **Open your browser**
   Go to [http://localhost:5173](http://localhost:5173)

You can now edit the code and see live updates!

---

## 🖌️ Customization

- Edit questions and answers in `src/data/questions.ts`.
- Update styles using Tailwind classes in your components.
- Favicon is located at `public/dataleon-favicon.png` (Dataleon logo).

---

## 📦 Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

---

## 📝 Notes

- Used React 19 and Tailwind CSS v4.1.
- TypeScript strict mode enabled.
- **Unit tests are included using [Vitest](https://vitest.dev/).**
- Deployed on Vercel: [questions-game-snowy.vercel.app](https://questions-game-snowy.vercel.app/)

---

## 👤 Author

Félix Orain
