# 📝 Simple Todo App – Audit Challenge

Welcome to the TnP technical challenge! This repo contains a basic full-stack Todo app built with **React** (frontend) and **Express.js** (backend).

Your task is to enhance this system by integrating an **Auditing Feature** that tracks all CRUD operations on the Todo items.

> Feel free to squad up, but if you do, list out your contributions in the README. We're building a team, not scouting for one-man armies.

> 🧠 AI can help you, but it won't save you. We're looking for how you **think**, not how fast you copy.

---

## 🔧 Tech Stack

- Frontend: React (Vite)
- Backend: Express.js (Node)
- API Communication: REST

---

## 📂 Project Structure

```
├── client/   # React frontend 
├── server/   # Express backend 
├── README.md 
```

## 🎯 Your Mission

Depending on your interest, complete one of the following (or all, if you're feeling unstoppable):

---

### 🖥️ Frontend

📌 **Task: Build an Audit Log Viewer**

- Use the mock API at:`https://67f00fb52a80b06b8896c3bf.mockapi.io/api/v1/audit_logs`
- Create a new page: `/audits`
- Display logs in a table format

✅ Must Haves:

- Filter by `action type` or `user`
- Sort by `timestamp`
- Search logs by partial text match
- Handle edge cases: empty values, long texts, invalid entities

💡 Figure out valid entity types.

🎁 **Bonus:**

- Pagination support
- Timeline-style visual display
- Refer [this guide](https://github.com/mockapi-io/docs/wiki/Quick-start-guide#generating-data) for mock API usage

---

### 🛠️ Backend

📌 **Task: Implement Audit Logging System**

- Intercept the `/todos` create, update, and delete routes
- Log the action in a separate audit log

✅ Required API Endpoints:

- `GET /api/audits` – Fetch all logs
- `GET /api/audits?user=...&action=...` – Filters, sort, search

🎁 **Bonus:**

- Restrict logs to admin users only (implement a basic user + admin model)
- Add before/after diff in a clean format

---

> Yes, the repo has flaws. That’s the point. Don’t whine — refine.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 2. Run Dev Servers

```bash
# Start Frontend
cd client
npm run dev

# Start Backend
cd ../server
npm run dev
```

---

## 🧠 Hidden Challenges & Bonus Points

> We're not just testing code — we're testing **you**.

✅ Clean UI/UX

✅ Handles weird edge cases

✅ Good naming + folder structure

✅ Clean Git history

✅ Explains trade-offs in README

✅ Filters and sorts with URL params

✅ Goes beyond requirements


> You are being judged on how you **think**, how you **work in a team**, and how you **handle ambiguity**.

---

## 📬 Submission

- Push your code to GitHub
- Create a PR to this repo
- Share the link with us

---

Good luck, coder. Let’s see what you've got 💥
