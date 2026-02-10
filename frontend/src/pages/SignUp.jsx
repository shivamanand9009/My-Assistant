import React, { useContext, useState } from "react";
import bg from "../assets/authBg.png";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";
import axios from "axios";
function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const { serverUrl, userData, setUserData } = useContext(userDataContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      let result = await axios.post(
        `${serverUrl}/api/auth/signup`,
        {
          name,
          email,
          password,
        },
        { withCredentials: true },
      );
      setUserData(result.data);
      setLoading(false);
      navigate("/customize");
    } catch (error) {
      console.log(error);
      setUserData(null);
      setLoading(false);
      setErr(error.response.data.message);
    }
  };
  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 flex justify-center items-center p-4">
      <form
        className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl shadow-black/50 flex flex-col items-center justify-center gap-5 p-8"
        onSubmit={handleSignUp}
      >
        <h1 className="text-white text-3xl font-semibold mb-8 text-center">
          Register to <span className="text-blue-400">Virtual Assistant</span>
        </h1>
        <input
          type="text"
          placeholder="Enter your Name"
          className="w-full h-14 outline-none border-2 border-white/30 bg-white/5 text-white placeholder-gray-300 px-5 rounded-full text-lg focus:border-blue-400 focus:bg-white/10 transition-all"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full h-14 outline-none border-2 border-white/30 bg-white/5 text-white placeholder-gray-300 px-5 rounded-full text-lg focus:border-blue-400 focus:bg-white/10 transition-all"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="w-full h-14 border-2 border-white/30 bg-white/5 text-white rounded-full relative focus-within:border-blue-400 focus-within:bg-white/10 transition-all">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="w-full h-full rounded-full outline-none bg-transparent placeholder-gray-300 px-5 pr-14"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {!showPassword && (
            <IoEye
              className="absolute top-1/2 -translate-y-1/2 right-5 w-6 h-6 text-white cursor-pointer hover:text-blue-400 transition-colors"
              onClick={() => setShowPassword(true)}
            />
          )}
          {showPassword && (
            <IoEyeOff
              className="absolute top-1/2 -translate-y-1/2 right-5 w-6 h-6 text-white cursor-pointer hover:text-blue-400 transition-colors"
              onClick={() => setShowPassword(false)}
            />
          )}
        </div>
        {err.length > 0 && (
          <p className="text-red-400 text-base self-start">*{err}</p>
        )}
        <button
          className="w-full h-14 mt-8 text-black font-semibold bg-white rounded-full text-lg hover:bg-blue-400 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>

        <p
          className="text-white text-base text-center cursor-pointer"
          onClick={() => navigate("/signin")}
        >
          Already have an account ?{" "}
          <span className="text-blue-400 hover:text-blue-300 transition-colors underline">
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
