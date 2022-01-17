import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "../Components/AccountBalance";

export default function Debits(props) {
  const [debits, setDebits] = useState([]);
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  //let totalDebits = 0;

  //setDebits({ amount: 100, name: "Reese" });

  async function fetchAPI() {
    const response = await fetch("https://moj-api.herokuapp.com/debits");
    const debitData = await response.json();
    setDebits(debitData);

    //console.log(debits);
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
    const newDebits = [...debits];
    newDebits.push({ description, amount, date });
    setDebits(newDebits);
    console.log(newDebits);
  };

  console.log(debits);
  console.log(debits);
  //debits.map((x) => (totalDebits += debits[x].amount));

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

      <h1>Your Debits</h1>

      <div id="allContent">
        <div id="forms">
          <form onSubmit={onSubmit}>
            <div>
              <label>Debit Description</label>
              {<input type="text" onChange={handleDescriptionChange}></input>}
            </div>

            <div>
              <label>Debit Amount</label>
              <input type="text" onChange={handleAmountChange} />
            </div>

            <div>
              <label>Debit Date</label>
              <input type="text" onChange={handleDateChange} />
            </div>

            <button>Add New Debit</button>
          </form>
        </div>

        <div id="DebitsTable">
          {debits.map((debit, key) => (
            <div key={key}>
              <div id="DescriptionDiv">
                {" "}
                <strong>Description</strong> : {debits[key].description}
              </div>
              <div id="AmountDiv">
                {" "}
                <strong>Amount</strong> : {debits[key].amount}
              </div>
              <div id="DateDiv">
                {" "}
                <strong>Date</strong> :{debits[key].date}
              </div>
            </div>
          ))}
        </div>
        <AccountBalance accountBalance={props.accountBalance} />
      </div>
    </div>
  );
}
