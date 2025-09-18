const ChatRoom = require("./chatRoom");

const chatRoom = new ChatRoom();

chatRoom.on("join", (user) => {
  console.log(`${user} has joined the chat room.`);
});

chatRoom.on("message", (user, message) => {
  console.log(`${user}: ${message}`);
});

chatRoom.on("leave", (user) => {
  console.log(`${user} has left the chat room.`);
});

// Simulate chat room activity
chatRoom.join("Alice");
chatRoom.join("Bob");

chatRoom.sendMessage("Alice", "Hello everyone!");
chatRoom.sendMessage("Bob", "Hi Alice!");
chatRoom.leave("Alice");
chatRoom.sendMessage("Alice", "Goodbye!");
chatRoom.leave("Bob");
