import React, { useState, useEffect } from "react";

export default function Debits() {
  const [debits, setDebits] = useState([]);
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  const [id, setId] = useState("Who cares");

  //setDebits({ amount: 100, name: "Reese" });

  async function fetchAPI() {
    const response = await fetch("https://moj-api.herokuapp.com/debits");
    const debitData = await response.json();
    //const newEntry=0
    setDebits(debitData);
    //console.log(debitData);
    //console.log(debits);
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
    newDebits.push({ id, description, amount, date });
    setDebits(newDebits);
    console.log(newDebits);
  };

  console.log(debits);
  console.log(debits);

  return (
    <div>
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
      </div>
    </div>
  );
}
