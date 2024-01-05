import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (username === "arvind" && password === "123456") {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div className="d-flex w-100 vh-100 bg-info justify-content-center align-items-center">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="text-center">Login</h2>
        <form>
          <div className="mb-3">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter the Username"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the Password"
              className="form-control rounded-0"
            />
          </div>
          <button
            onClick={handleLogin}
            className="btn btn-info w-100 rounded-0"
          >
            Login
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};
export default Login;
