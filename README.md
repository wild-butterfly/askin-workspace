# Askin Fear — Full Stack Developer Portfolio

A **production-ready full stack developer portfolio** built with **React, Next.js, TypeScript and Node.js**.

This project presents experience, skills and real-world systems inside a **VS Code–styled developer workspace**, giving recruiters an authentic engineering feel rather than a traditional static portfolio.

---

## 🚀 Live Demo

👉 https://askin-workspace.vercel.app

---

## 🧠 Tech Stack

- ⚛️ Next.js 16 (App Router, Server Components)
- 🪄 React 19
- ✨ Tailwind CSS v4
- 📁 Server-side file rendering (Node `fs`)
- 🖥️ VSCode-style UI (Explorer, Tabs, Editor, Terminal)
- ☁️ Vercel deployment

---

## ✨ Features

### 🧱 VS Code Style UI

Interactive editor-style layout with:

- Explorer
- Tabs
- Code viewer
- Terminal

### 📄 File-Based Content

Experience, skills and profile data are rendered from real files:

- `fs.readFileSync`
- works with Next.js App Router
- fully compatible with Vercel
- no custom loaders required

---

## 💡 Why this Portfolio?

Instead of a simple landing page:

✔ Shows engineering mindset  
✔ Demonstrates real production architecture  
✔ More engaging for technical recruiters  
✔ Unique & memorable  
✔ Highlights real projects, not tutorials

---

## 🧑‍💻 Run Locally

```bash
git clone https://github.com/wild-butterfly/askin-workspace.git
cd askin-workspace
npm install
npm run dev
```

---

## 📂 Content Structure

```
src/content/
 ├─ READaboutME.md
 ├─ skills.json
 └─ experience.log
```

These files are rendered directly inside the editor UI.
