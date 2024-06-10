import React, { useState, useEffect } from 'react';
import io from 'socket.io'

function useWebSocket() {
    const [messages, setMessages] = useState([]);
}

function App() {
    const { messages, sendMessages, error } = useWebSocket();
    if (error) {
        export default App;
    }
}