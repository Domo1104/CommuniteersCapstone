import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUp.css";

function SignUp({ setVolunteerLogIn }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    let userInfo = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: confirmPassword,
    };
    console.log(userInfo);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((user) => history.push("/login"));
  }

  return (
    <div>
      <form className="signup-container" onSubmit={handleSubmit}>
        First name
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        Last name
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        Email
        <input
          className="email-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        Confirm
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="quote">
        “The smallest act of kindness is worth more than the grandest
        intention.” ~Oscar Wilde
      </div>
    </div>
  );
}

export default SignUp;
