import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const buttonClick = (e) => {
    e.preventDefault();
    if(isEmail(email) && isPassword(password)) {
      navigate('/')
      return;
    }
    if (!isEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!isPassword(password)) {
      setError(
        "Enter a password with at least one uppercase letter, one number, and one special character."
      );
      return;
    }
  };

  const isEmail = (email) => {
    const val = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return val.test(email.toLowerCase());
  };

  const isPassword = (password) => {
    const val = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return val.test(password);
  };

  return (
    <div className="login-section">
      <h1>Login</h1>
      <hr />
      <form className="login-form">
        <input
          type="email"
          className="login-credentials"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
        required
          type="password"
          className="login-credentials"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={buttonClick} className="login-button">
          Submit
        </button>
      {!error ? '' : <p className="login-error"> {`Error: ${error}`}</p>}
      </form>
    </div>
  );
}
