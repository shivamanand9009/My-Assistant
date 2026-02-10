import React, { useContext, useState } from "react";
import { userDataContext } from "../context/UserContext";
import axios from "axios";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Customize2() {
  const { userData, backendImage, selectedImage, serverUrl, setUserData } =
    useContext(userDataContext);
  const [assistantName, setAssistantName] = useState(
    userData?.AssistantName || "",
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpdateAssistant = async () => {
    setLoading(true);
    try {
      let formData = new FormData();
      formData.append("assistantName", assistantName);
      if (backendImage) {
        formData.append("assistantImage", backendImage);
      } else {
        formData.append("imageUrl", selectedImage);
      }
      const result = await axios.post(
        `${serverUrl}/api/user/update`,
        formData,
        { withCredentials: true },
      );
      setLoading(false);
      console.log(result.data);
      setUserData(result.data);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 flex justify-center items-center flex-col p-5 relative">
      <MdKeyboardBackspace
        className="absolute top-8 left-8 text-white cursor-pointer w-6 h-6 hover:text-blue-400 transition-colors"
        onClick={() => navigate("/customize")}
      />
      <h1 className="text-white mb-10 text-3xl text-center">
        Enter Your <span className="text-blue-400">Assistant Name</span>{" "}
      </h1>
      <input
        type="text"
        placeholder="eg. shifra"
        className="w-full max-w-[600px] h-14 outline-none border-2 border-white/30 bg-white/5 text-white placeholder-gray-300 px-5 rounded-full text-lg focus:border-blue-400 focus:bg-white/10 transition-all"
        required
        onChange={(e) => setAssistantName(e.target.value)}
        value={assistantName}
      />
      {assistantName && (
        <button
          className="min-w-[300px] h-14 mt-8 text-black font-semibold cursor-pointer bg-white rounded-full text-lg hover:bg-blue-400 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
          onClick={() => {
            handleUpdateAssistant();
          }}
        >
          {!loading ? "Finally Create Your Assistant" : "Loading..."}
        </button>
      )}
    </div>
  );
}

export default Customize2;
