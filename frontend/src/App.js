import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.js";
import Footer from "./Components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/chatPage.js";
import Chat from "./pages/chat.js";
import Profile from "./pages/profile.js";
import Jobs from "./pages/jobs.js";
import House from "./pages/houses.js";
import EducationApp from "./pages/education.js";
import Healthcare from "./pages/healthcare.js";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/chatpage" element={<ChatPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/houses" element={<House />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="education" element={<EducationApp />} />
          <Route index element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
