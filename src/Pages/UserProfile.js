import react from "react";
import { Link } from "react-router-dom";

export default function UserProfile(props) {
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
      </div>
      <h1>User Profile</h1>

      <div>Username: {props.userName}</div>
      <div>Member Since: {props.memberSince}</div>
    </div>
  );
}
