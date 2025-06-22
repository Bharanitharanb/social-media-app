// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// function LoginPage() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         {
//           email,
//           password,
//         }
//       );

//       localStorage.setItem("token", response.data.token); // Save token
//       localStorage.setItem("username", response.data.user.username);
//       localStorage.setItem("email", response.data.user.email);

//       navigate("/home");
//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div
//       className="flex flex-col items-center justify-center min-h-screen text-white"
//       style={{ backgroundImage: "url('/Vibespot.png')" }}>
//       <h1 className="text-5xl font-extrabold mb-2 tracking-wide">VibeSpot</h1>
//       <p className="text-lg-4 mb-8 italic">
//         Discover the vibe, Share your spot.
//       </p>

//       <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-yellow-300 rounded-md"
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-yellow-300 rounded-md pr-12"
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500">
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-2 rounded-md">
//             Login
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-yellow-500 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    try {
      // Send POST request to backend API
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        userData
      );
      console.log(response.data.message);
      navigate("/home");
    } catch (error) {
      console.error(
        "Error login:",
        error.response?.data?.message || error.message
      );
      alert("Invalid email or password.");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white"
      style={{ backgroundImage: "url('/Loginpage.png')" }}>
      <h1 className="text-5xl font-extrabold mb-2 tracking-wide">VibeSpot</h1>
      <p className="text-lg-4 mb-8 italic">
        Discover the vibe, Share your spot.
      </p>

      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400 pr-12"
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-yellow-500"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-700 transition">
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-yellow-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
