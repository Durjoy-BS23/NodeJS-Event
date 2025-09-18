# ChatRoom.js

A minimal Node.js example demonstrating the EventEmitter pattern with a simple ChatRoom class.

## Overview

This small project implements a ChatRoom using Node.js events. The ChatRoom class extends Node's built-in `EventEmitter` so it can emit events like `join`, `message`, and `leave`. The included `index.js` shows how to listen for those events and how the ChatRoom behaves when users join, send messages, or leave.

## Node.js Events & EventEmitter (brief)

- Node.js provides the `events` module which exposes the `EventEmitter` class.
- `EventEmitter` allows objects to emit named events and register listeners (callbacks) for those events.
- Common methods:
  - `emitter.on(eventName, listener)` — register a listener for `eventName`.
  - `emitter.emit(eventName, ...args)` — synchronously call each listener registered for `eventName` with the supplied arguments.
  - `emitter.removeListener(...)` / `emitter.off(...)` — remove listeners.

Using events decouples the code that produces occurrences (events) from the code that reacts to them.

## ChatRoom class (what it does)

- Extends `EventEmitter`.
- Maintains a Set of active users.
- API:
  - `new ChatRoom()` — create a chat room.
  - `join(user)` — add `user`, emits `"join"` with the username.
  - `sendMessage(user, message)` — if `user` is present, emits `"message"` with `(user, message)`; otherwise logs that the user is not in the room.
  - `leave(user)` — removes `user` and emits `"leave"`; otherwise logs that the user is not in the room.

## Usage (index.js)

Run the example:

```
node index.js
```

The `index.js` in this project:

- Listens for `join`, `message`, and `leave` events and logs them to the console.
- Simulates activity:
  - Alice and Bob join.
  - They exchange messages.
  - Alice leaves and then an attempt is made to send a message as Alice (which will log that Alice is not in the chat room).
  - Bob leaves.

Expected console output:

```
Alice has joined the chat room.
Bob has joined the chat room.
Alice: Hello everyone!
Bob: Hi Alice!
Alice has left the chat room.
Alice is not in the chat room.
Bob has left the chat room.
```

## Notes

- Requires Node.js (recommended v12+).
- The code is intentionally small to illustrate how `EventEmitter` works in a real-world-like example.
