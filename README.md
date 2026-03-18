# AI Chatbot

## Description
This is a simple web-based AI chatbot that allows users to type messages and receive responses from an AI model. The project connects a frontend interface to a backend server that communicates with the OpenAI API.

---

## How It Works
1. The user types a message in the chat interface.
2. The frontend (JavaScript) sends the message to the backend (`/chat` endpoint).
3. The backend (Node.js + Express) sends the message to the OpenAI API.
4. The AI response is returned and displayed on the webpage.

---

## Tech Stack
- HTML  
- CSS  
- JavaScript  
- Node.js  
- Express  
- OpenAI API  

---

## Project Structure
chatbot-project/
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── server.js
├── package.json
├── package-lock.json
├── README.md

---

## Setup Instructions

### 1. Install dependencies
npm install

### 2. Create a `.env` file
Add your OpenAI API key:
OPENAI_API_KEY=your_api_key_here

### 3. Run the server
node server.js

### 4. Open in browser
http://localhost:3000

## 📚 Notes
- The `node_modules` folder is not included in this repository.  
- Run `npm install` to install dependencies.  
