import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import SignOut from "./SignOut";

const base_url = "http://localhost:5000";

function ProtectedRoute() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signOut = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${base_url}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setUser(data.user);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  useEffect(() => {
    if (token && !user) {
      // Optionally fetch user details using token if needed
    }
  }, [token]);

  return (
    <div style={{ padding: "2rem" }}>
      {token ? (
        <>
          <h2>Welcome, {user?.name || "User"}!</h2>
          <SignOut onSignOut={signOut} />
          <Todo />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <form onSubmit={login}>
          <h2>Login</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default ProtectedRoute;
