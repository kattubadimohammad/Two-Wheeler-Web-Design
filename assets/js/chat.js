document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.querySelector(".chat-box");
    const chatContent = document.getElementById("chat-content");
    const chatInput = document.getElementById("chat-input");
    const chatSend = document.getElementById("chat-send");
    const chatClose = document.getElementById("chat-close");
    const chatToggle = document.getElementById("chat-toggle");

    // Show the chat box after 5 seconds
    setTimeout(() => {
        chatBox.style.display = "flex";
    }, 5000);

    // Handle sending messages
    chatSend.addEventListener("click", function () {
        sendMessage();
    });

    // Allow pressing Enter to send messages
    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    // Close the chat box
    chatClose.addEventListener("click", function () {
        chatBox.style.display = "none";
    });

    // Toggle chat box visibility
    chatToggle.addEventListener("click", function () {
        if (chatBox.style.display === "flex") {
            chatBox.style.display = "none";
        } else {
            chatBox.style.display = "flex";
        }
    });

    // Function to send messages
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, "user-message");
            chatInput.value = "";
            setTimeout(() => autoReply(message), 1000);
        }
    }

    // Add a new message to the chat content
    function addMessage(text, className) {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${className}`;
        messageElement.textContent = text;
        chatContent.appendChild(messageElement);
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    // Generate an automatic reply
    function autoReply(userMessage) {
        let reply;
        const lowerCaseMessage = userMessage.toLowerCase();
        if (lowerCaseMessage.includes("hello")) {
            reply = "Hi there! How can I help you today?";
        } else if (lowerCaseMessage.includes("services")) {
            reply = "We offer comprehensive bike repair, routine maintenance, and custom modifications. What service are you interested in?";
        } else if (lowerCaseMessage.includes("contact")) {
            reply = "You can reach us at info.gravitymotors@gmail.com or call us at 91-725-959-5346.";
        } else if (lowerCaseMessage.includes("price")) {
            reply = "Our service prices vary depending on the type of service. Can you specify which service you are interested in?";
        } else if (lowerCaseMessage.includes("location")) {
            reply = "We are located at G.R Homes 3rd Cross, Meenakshi Layout, Bengaluru, Karnataka 560035. Looking forward to your visit!";
        } else {
            reply = "I'm sorry, I didn't understand that. Can you please provide more details?";
        }
        addMessage(reply, "bot-message");
    }
});
