# Aşkın Fear — Developer Workspace Portfolio

A **VS Code–styled interactive portfolio** built with modern **Next.js App Router**.  
It simulates a real developer workspace where experience, skills, and production systems are explored like files inside an editor.

Instead of a traditional static portfolio, this project presents content as **code files**, giving recruiters a more authentic engineering feel.

---

## 🧠 Tech Stack

- ⚛️ Next.js (App Router, Server Components)
- 🪄 React 19
- ✨ Tailwind CSS v4
- 📁 Raw file imports (`.md / .json / .log`)
- 🖥️ VSCode-style UI (Explorer, Tabs, Editor, Terminal)
- ☁️ Vercel deployment

---

## 💡 Why this approach?

Rather than a typical landing page:

✔ Mimics an actual developer workspace  
✔ Shows experience as real files  
✔ Demonstrates engineering mindset  
✔ Engages technical recruiters  
✔ Unique & memorable design

---

## 🗂️ Features

### 🧱 Explorer

Browse markdown, JSON and log files like VS Code.

### 📑 Tabs

Open multiple files simultaneously in editor-style tabs.

### 🖋️ Syntax Highlighting

Code-style rendering with dark VSCode theme.

### 🖥️ Terminal

Fake interactive terminal panel for personality.

### ⚡ Static File Rendering

Uses `?raw` imports instead of Node `fs` for:

- faster builds
- edge compatibility
- Vercel-safe deployment

---

## 🚀 Live Demo

👉 https://your-domain.vercel.app

---

## 🧑‍💻 Run Locally

```bash
git clone https://github.com/wild-butterfly/askin-workspace.git
cd askin-workspace
npm install
npm run dev
```
