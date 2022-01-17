import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import React, { useState } from "react";
import UserProfile from "./Pages/UserProfile";
import Login from "./Pages/Login";
import Debits from "./Pages/Debits";

function App() {
  const [accountBalance, setAccountBalance] = useState(14568.27);

  const [currentUser, setCurrentUser] = useState({
    userName: "Your name could be here!",
    memberSince: "Make an account and it'll be today!",
  });

  const mockLogin = (loginInfo) => {
    const newUser = { ...currentUser };
    newUser.userName = loginInfo.userName;
    setCurrentUser(newUser);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={<Home accountBalance={accountBalance} />}
          />
          <Route path="/" element={<Home accountBalance={accountBalance} />} />
          <Route
            path="/userProfile"
            element={
              <UserProfile
                userName={currentUser.userName}
                memberSince={currentUser.memberSince}
              />
            }
          />
          <Route
            path="/login"
            element={<Login user={currentUser} mockLogin={mockLogin} />}
          />
          <Route path="/debits" element={<Debits />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
