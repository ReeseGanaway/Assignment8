import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import React, { useState } from "react";

function App() {
  const [accountBalance, setAccountBalance] = useState(14568.27);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/Home"
            element={<Home accountBalance={accountBalance} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
