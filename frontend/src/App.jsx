import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Customize from "./pages/Customize";
import { userDataContext } from "./context/UserContext";
import Home from "./pages/Home";
import Customize2 from "./pages/Customize2";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function App() {
  const { userData, setUserData } = useContext(userDataContext);
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex-grow overflow-auto">
        <Routes>
          <Route
            path="/"
            element={
              userData?.assistantImage && userData?.assistantName ? (
                <Home />
              ) : (
                <Navigate to={"/customize"} />
              )
            }
          />
          <Route
            path="/signup"
            element={!userData ? <SignUp /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signin"
            element={!userData ? <SignIn /> : <Navigate to={"/"} />}
          />
          <Route
            path="/customize"
            element={userData ? <Customize /> : <Navigate to={"/signup"} />}
          />
          <Route
            path="/customize2"
            element={userData ? <Customize2 /> : <Navigate to={"/signup"} />}
          />
        </Routes>
      </div>

      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/20 py-4 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/70 text-sm">
              © 2026 Shivam's Assistant. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/shivam-anand-649878228/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/shivamanand9009"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-blue-400 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>

            <p className="text-white/50 text-xs">
              Made with ❤️ by Shivam Anand
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
