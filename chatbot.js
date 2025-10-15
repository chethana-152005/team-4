<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Smiley ChatBot 🤖</title>
<style>
  body {
    background: linear-gradient(120deg, #a1ffce, #faffd1);
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  .chatbot {
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    width: 320px;
    text-align: center;
    padding: 20px;
  }

  .robot-face {
    width: 100px;
    height: 100px;
    background: #0078d7;
    border-radius: 50%;
    margin: 0 auto 15px;
    position: relative;
    transition: background 0.5s;
  }

  .eye {
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 30px;
  }

  .eye.left { left: 25px; }
  .eye.right { right: 25px; }

  .smile {
    width: 40px;
    height: 20px;
    border-bottom: 4px solid white;
    border-radius: 0 0 50px 50px;
    position: absolute;
    bottom: 25px;
    left: 30px;
  }

  .chat-box {
    background: #f7f7f7;
    border-radius: 10px;
    padding: 10px;
    height: 220px;
    overflow-y: auto;
    margin-bottom: 10px;
    text-align: left;
  }

  .bot-msg, .user-msg {
    margin: 8px 0;
    padding: 8px 10px;
    border-radius: 8px;
    display: inline-block;
    max-width: 80%;
  }

  .bot-msg { background: #e0f0ff; }
  .user-msg { background: #d4edda; float: right; }

  .input-area {
    display: flex;
    justify-content: space-between;
  }

  input {
    width: 75%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  button {
    background: #0078d7;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;
  }

  button:hover { background: #005fa3; }
</style>
</head>
<body>

<div class="chatbot">
  <div class="robot-face" id="robot">
    <div class="eye left"></div>
    <div class="eye right"></div>
    <div class="smile"></div>
  </div>

  <div class="chat-box" id="chat-box">
    <div class="bot-msg">🤖 Hello! I’m SmileyBot 😊</div>
  </div>

  <div class="input-area">
    <input type="text" id="user-input" placeholder="Type something...">
    <button onclick="sendMsg()">Send</button>
  </div>
</div>

<script>
function sendMsg() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const robot = document.getElementById("robot");
  const msg = input.value.trim();

  if (msg === "") return;

  // User message
  const userDiv = document.createElement("div");
  userDiv.className = "user-msg";
  userDiv.textContent = msg;
  chatBox.appendChild(userDiv);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Bot thinking animation
  robot.style.background = "#00c853";

  setTimeout(() => {
    const botDiv = document.createElement("div");
    botDiv.className = "bot-msg";
    botDiv.textContent = getBotReply(msg);
    chatBox.appendChild(botDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    robot.style.background = "#0078d7";
  }, 600);
}

function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hi") || msg.includes("hello"))
    return "Hi there! 😊";
  if (msg.includes("how are you"))
    return "I'm feeling fantastic today! 😄";
  if (msg.includes("your name"))
    return "I’m SmileyBot 🤖";
  if (msg.includes("bye"))
    return "Goodbye! Keep smiling 😁";
  if (msg.includes("thank"))
    return "You're most welcome 💖";
  
  return "That's cool! Tell me more 😎";
}

document.getElementById("user-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMsg();
});
</script>

</body>
</html>
