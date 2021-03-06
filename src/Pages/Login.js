import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [user, setUser] = useState({ userName: "", password: "" });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const updatedUser = { ...user };
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedUser[inputField] = inputValue;
    setUser(updatedUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.mockLogin(user);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/userProfile" />;
  }
  return (
    <div>
      <div className="NavBars">
        <Link className="Links" to="/home">
          Home
        </Link>
        <Link className="Links" to="/userProfile">
          UserProfile
        </Link>
        <Link className="Links" to="/login">
          Login
        </Link>
        <Link className="Links" to="/debits">
          Debits
        </Link>
        <Link className="Links" to="/credits">
          Credits
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            value={user.userName}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button>Log In</button>
      </form>
    </div>
  );
}
