import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/auth/authSlice";

export default function Auth() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  return (
    <>
      {/* 🔐 Auth Section */}
      <div style={{ marginBottom: "2rem" }}>
        <h2>Auth</h2>
        {auth.isAuthenticated ? (
          <div>
            <p>Welcome, {auth.user}</p>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>
        ) : (
          <div>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
            <button
              onClick={() => {
                if (username.trim()) {
                  dispatch(login(username));
                  setUsername("");
                }
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
}
