import React from "react";
import { Link } from "react-router-dom";
import AccountBalance from "../Components/AccountBalance";

export default function Home(props) {
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

      <div>
        <img
          src="https://res.cloudinary.com/andreahabib/image/upload/v1642026304/React_Bank_dk7n1a.png"
          alt="bank"
        />
        <h1>Bank of React</h1>

        <AccountBalance accountBalance={props.accountBalance} />
      </div>
    </div>
  );
}
