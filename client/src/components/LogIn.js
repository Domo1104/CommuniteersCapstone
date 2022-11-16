import React, { useState } from "react";
import "./LogIn.css";

function LogIn({ setVolunteerLogIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((r) => {
          sessionStorage.setItem("user_data", JSON.stringify(r));
          const data = sessionStorage.getItem("user_data");
          setVolunteerLogIn(data);
        });
      } else {
        res.json().then((json) => console.log(json.errors));
      }
    });
  }

  return (
    <div>
      <div className="login-container">
        {error && <p>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            Email
            <input
              className="email-input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            Password
            <input
              className="password-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="quote">
        “You make a living by what you get. You make a life by what you give.”
        ~Winston Churchill
      </div>
    </div>
  );
}

export default LogIn;
