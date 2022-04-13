import React, { useEffect, useState } from "react";
import { signupRequest } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    geolocation: {
      lat: "",
      long: "",
    },
    phone: "",
  });

  const {signup: state} = useSelector((state) => state);
  console.log(state, "::state");

  useEffect(()=>{
    if(state.isSuccess) {
      navigate('/')
    }
  },[state.isSuccess])

  const handleChange = (key, value) => {
    setUserDetails({ ...userDetails, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signupRequest({
        email: userDetails.email,
        username: userDetails.username,
        password: userDetails.password,
        name: {
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
        },
        address: {
          city: userDetails.city,
          street: userDetails.street,
          number: userDetails.number,
          zipcode: userDetails.zipcode,
          geolocation: {
            lat: "",
            long: "",
          },
        },
        phone: userDetails.phone,
      })
    );
  };

  return (
    <div>
      <div className="flex h-screen bg-gradient-to-b from-gray-800 to-gray-400">
        <div className="m-auto">
          <div className="bg-white p-4 rounded-lg shadow-2xl text-center">
            <p className="text-3xl font-black">Sign Up</p>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  value={userDetails.firstName}
                  type="text"
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  placeholder="First Name"
                  className="mx-4 my-4 border-b-2 rounded-lg px-3 py-2"
                  required
                />
                <input
                  value={userDetails.lastName}
                  type="text"
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  placeholder="Last Name"
                  className="mx-4 my-4 border-b-2 rounded-lg px-3 py-2"
                  required
                />
              </div>
              <div>
                <input
                  value={userDetails.email}
                  type="text"
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Email"
                  className="mx-4 my-4 border-b-2 rounded-lg px-3 py-2"
                  required
                />
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
              <p className="text-left mx-4 mt-6">Address</p>
              <div>
                <input
                  value={userDetails.city}
                  type="text"
                  onChange={(e) => handleChange("city", e.target.value)}
                  placeholder="City"
                  className="mx-4 my-4 border-b-2 rounded-lg px-3 py-2"
                  required
                />
                <input
                  value={userDetails.street}
                  type="text"
                  onChange={(e) => handleChange("street", e.target.value)}
                  placeholder="Street"
                  className="mx-4 my-4 border-b-2 rounded-lg px-3 py-2"
                  required
                />
              </div>
              <div>
                <input
                  value={userDetails.number}
                  type="number"
                  onChange={(e) => handleChange("number", e.target.value)}
                  placeholder="Number"
                  className="mx-4 my-4 border-b-2 rounded-lg px-3 py-2"
                  required
                />
                <input
                  value={userDetails.zipcode}
                  type="text"
                  onChange={(e) => handleChange("zipcode", e.target.value)}
                  placeholder="Zipcode"
                  className="mx-4 my-4 border-b-2 rounded-lg px-3 py-2"
                  required
                />
              </div>
              <div>
                <input
                  value={userDetails.phone}
                  type="phone"
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Phone"
                  className="mx-4 my-4 border-b-2 rounded-lg px-3 py-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white py-1 px-4 rounded-full transition duration-300 ease-in-out hover:bg-slate-600 hover:scale-110"
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm mt-6 mb-0">
              Alreadt a registered user?{" "}
              <a className="text-blue-400" href="/">
                Login!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
