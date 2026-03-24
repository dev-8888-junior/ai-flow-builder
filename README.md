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
(1)Clone the repo 

git clone https://github.com/<your-username>/ai-flow-webapp.git
cd ai-flow-webapp

(2) Install backend dependencies
cd server
npm install

(3) Install frontend dependencies
cd ../client
npm install

(4) Set up environment variables

Create a .env file in the server/ folder:

MONGO_URI=<Your MongoDB URI>
GROQ_API_KEY=<Your OpenRouter API Key>
PORT=5000

(5) Start the backend server
cd server
node index.js

(6) Start the frontend
cd client
npm run dev 

Open your browser at the URL that's shown in terminal (default: http://localhost:5173). 

How to Use
Type a message in the input box.
Click Run Flow to see the generated output.
Click Save to store the message and output in MongoDB. 


