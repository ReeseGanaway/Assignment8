import react from "react";
import { Link } from "react-router-dom";
import AccountBalance from "../Components/AccountBalance";

export default function Home(props) {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/andreahabib/image/upload/v1642026304/React_Bank_dk7n1a.png"
        alt="bank"
      />
      <h1>Bank of React</h1>

      <AccountBalance accountBalance={props.accountBalance} />

      <Link to="/userProfile">UserProfile</Link>
    </div>
  );
}
