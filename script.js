async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;

  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;

  try {
    const response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    chatBox.innerHTML += `<p><b>Bot:</b> ${data.reply}</p>`;
  } catch (error) {
    chatBox.innerHTML += `<p><b>Error:</b> Could not reach server</p>`;
  }

  input.value = "";
}

// Enter key support
document.getElementById("user-input")
  .addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
});