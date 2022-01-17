import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "../Components/AccountBalance";

export default function Credits(props) {
  const [credits, setCredits] = useState([]);
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();

  async function fetchAPI() {
    const response = await fetch("https://moj-api.herokuapp.com/credits");
    const creditData = await response.json();
    setCredits(creditData);

    //console.log(credits);
    //console.log(totalDebits);
  }

  useEffect(async () => {
    fetchAPI();
  }, []);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newCredits = [...credits];
    newCredits.push({ description, amount, date });
    setCredits(newCredits);
    console.log(newCredits);
  };

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

      <h1>Your Credits</h1>

      <div id="allContent">
        <div id="forms">
          <form onSubmit={onSubmit}>
            <div>
              <label>Crebit Description</label>
              {<input type="text" onChange={handleDescriptionChange}></input>}
            </div>

            <div>
              <label>Credit Amount</label>
              <input type="text" onChange={handleAmountChange} />
            </div>

            <div>
              <label>Credit Date</label>
              <input type="text" onChange={handleDateChange} />
            </div>

            <button>Add New Credit</button>
          </form>
        </div>

        <div id="CreditsTable">
          {credits.map((credit, key) => (
            <div key={key}>
              <div id="DescriptionDiv">
                {" "}
                <strong>Description</strong> : {credits[key].description}
              </div>
              <div id="AmountDiv">
                {" "}
                <strong>Amount</strong> : {credits[key].amount}
              </div>
              <div id="DateDiv">
                {" "}
                <strong>Date</strong> :{credits[key].date}
              </div>
            </div>
          ))}
        </div>
        <AccountBalance accountBalance={props.accountBalance} />
      </div>
    </div>
  );
}
