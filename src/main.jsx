
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh"
    }}>
      <img src="/coinbase-top.png" alt="Coinbase" style={{ height: "40px", marginBottom: "10px" }} />
      <div style={{
        width: "100%",
        maxWidth: "450px",
        backgroundColor: "#1e293b",
        padding: "30px",
        borderRadius: "12px",
        color: "white",
        textAlign: "center"
      }}>
        <img src="/coinbase-logo.png" alt="Coinbase Logo" style={{ height: "40px", marginBottom: "15px" }} />
        {!loggedIn ? (
          <>
            <h2>Log in to Support</h2>
            <input placeholder="Name" style={input} value={name} onChange={(e) => setName(e.target.value)} />
            <input type="password" placeholder="Password" style={input} />
            <button style={btn} onClick={() => setLoggedIn(true)}>Log In</button>
          </>
        ) : (
          <>
            <h2>Welcome, {name}</h2>
            <a href="https://t.me/coinbasesupportbot" target="_blank" style={btn}>📨 Telegram</a>
            <a href="#" style={{ ...btn, backgroundColor: "#22c55e" }}>💬 Live Chat</a>
            <p style={{ marginTop: 20 }}>Or send us a message:</p>
            <input placeholder="Email" style={input} value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder="Message" rows="4" style={input} value={message} onChange={(e) => setMessage(e.target.value)} />
            <button style={btn}>Send Email</button>
          </>
        )}
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "none"
};

const btn = {
  display: "block",
  width: "100%",
  padding: "12px",
  backgroundColor: "#3b82f6",
  color: "white",
  borderRadius: "6px",
  marginTop: "10px",
  textDecoration: "none",
  textAlign: "center"
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
