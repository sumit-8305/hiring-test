# 📝 Simple Todo App – Audit Challenge

Welcome to TnP technical challenge! This repo contains a basic full-stack Todo app built with **React** (frontend) and **Express.js** (backend).

Your task is to enhance this system by integrating an **Auditing Feature** that tracks all CRUD operations on the Todo items.

> Feel free to squad up, but if you do, list out your contributions in the README. We're building a team, not scouting for one-man armies.

---

## 🔧 Tech Stack

- Frontend: React (Vite)
- Backend: Express.js (Node)
- API Communication: REST

---

## 📂 Project Structure

```
├── client/ # React frontend 
├── server/ # Express backend 
├── README.md 
```

## 🎯 Your Mission

Depending on your interest, complete one of the following (or all if you want):

### 🖥️ Frontend Developers

📌 Task: Build an **Audit Log Viewer**

- Use the mock API at `https://67f00fb52a80b06b8896c3bf.mockapi.io/api/v1/audit_logs`
- Create a new page `/audits`
- Display logs in a table format
- Support basic features:
  - Filter by action type or user
  - Sort by timestamp
  - Search logs by text match
- Handle edge cases (empty values, long texts, invalid entities)
- Valid `entity_type` are `todo` and `user`.

🎁 Bonus:

- Add pagination
- Add a timeline-style view
- Refer **[here ](https://github.com/mockapi-io/docs/wiki/Quick-start-guide#generating-data)**for api reference.

### 🛠️ Backend Developers

📌 Task: Implement **Audit Logging System**

- Hook into existing `/todos` endpoints
- For every create, update, delete → store a log entry

🗃️ Sample Audit Entry:

```json
{
    "id": 499,
    "user_id": 2,
    "action": "todo_create",
    "entity_type": "todo",
    "entity_id": 148,
    "previous_state": null,
    "new_state": "{\"title\": \"Defeat Thanos\", \"completed\": false}",
    "timestamp": "2025-04-02T10:09:49Z"
}
```

Create endpoints:

* GET /api/audits – Get all logs
* (Optional) GET /api/audits?user=...&action=... (filter, sort and search)

🎁 Bonus:

* Restrict audit log access to admin users (introduce admin user)

## 🚀 Getting Started

1. Install

```bash
cd client && npm install
cd ../server && npm install
```

2. Run Dev Servers

```bash
# Frontend
cd client
npm run dev

# Backend
cd ../server
npm run dev
```

🕵️Bonus Points

- Use clean UI/UX practices
- Handle edge cases (empty logs, long texts)
- Catch and show errors gracefully
- Clean commit history

# 📬 Submission

- Push your code to GitHub
- Create a PR to this repo.
- Share the repo link with us
