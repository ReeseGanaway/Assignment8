import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import React, { useState } from "react";
import UserProfile from "./Pages/UserProfile";
import Login from "./Pages/Login";

function App() {
  const [accountBalance, setAccountBalance] = useState(14568.27);

  const [currentUser, setCurrentUser] = useState({
    userName: "Kakashi Hatake",
    memberSince: "09/15/1973",
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
