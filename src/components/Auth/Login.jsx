import React, { use, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is : ", email);
    console.log("Password is : ", password);

    setEmail("")
    setPassword("")
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text-white outline-none border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400 bg-transparent"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="text-white outline-none mt-3 border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400 bg-transparent"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="text-white outline-none bg-emerald-600 mt-6  rounded-full py-3 px-5 w-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
