import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../Redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setUserDetails({ ...userDetails, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(userDetails))

  };
  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-800 to-gray-400">
      <div className="m-auto">
        <div className="bg-white p-4 rounded-lg shadow-2xl text-center">
          <p className="text-3xl font-black">Login</p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                value={userDetails.username}
                type="text"
                onChange={(e) => handleChange("username", e.target.value)}
                name="username"
                placeholder="Username"
                className="mx-4 my-4 border-b-2 rounded-lg px-3 py-2"
                required
              />
            </div>
            <div>
              <input
                value={userDetails.password}
                type="password"
                onChange={(e) => handleChange("password", e.target.value)}
                name="password"
                placeholder="Password"
                className="mx-4 my-4 border-b-2 rounded-lg px-3 py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white py-1 px-4 rounded-full transition duration-300 ease-in-out hover:bg-slate-600 hover:scale-110"
            >
              Login
            </button>
          </form>
          <p className="text-sm mt-6 mb-0">
            Not a registered user?{" "}
            <a className="text-blue-400" href="/signup">
              Signup Now!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
