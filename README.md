AI Flow Web App: 
A simple web application where you can type a message, run it through a text generator, and see the response visualized as a flow chart. You can also save the messages to a database for later reference.

Features:
(1) Interactive Flow Chart: Two connected boxes
(2) Input Box: Type your message.
(3) Output Box: See the generated response.
(4) Run Button: Sends the input to the server and displays the result.
(5) Save Button: Saves the message and response to MongoDB.
(6) Backend API: Handles requests securely so your keys aren’t exposed in the browser. 

Tech Stack
(1) Frontend: React, React Flow
(2) Backend: Node.js, Express.js
(3) Database: MongoDB
(4) Text Generator: OpenRouter API 

Getting Started
Prerequisites
Node.js
npm or yarn
MongoDB account (Atlas or local instance)  

Installation:  
Clone the repo
git clone https://github.com/<your-username>/ai-flow-webapp.git
cd ai-flow-webapp
Install backend dependencies
cd server
npm install
Install frontend dependencies
cd ../client
npm install
Set up environment variables

Create a .env file in the server/ folder:

MONGO_URI=<Your MongoDB URI>
GROQ_API_KEY=<Your OpenRouter API Key>
PORT=5000
Start the backend server
cd server
node index.js



Start the frontend
cd client
npm run dev
