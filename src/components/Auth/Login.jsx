import React, { useState } from "react";

const Login = ({loginHandler}) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submithandler = (e) => {
    console.log("form submitted");
    e.preventDefault();

    console.log("Email: " + Email);
    console.log("Password: " + Password);
    setEmail("");
    setPassword("");
    loginHandler(Email, Password);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className=" border-2 border-red-200 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex flex-col"
        >
          <input
            value={Email}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            required
            className=" p-3 rounded-xl bg-[#111] border border-red-200"
            type="email"
            placeholder="Enter your email"
          />
          <input
          value={Password}
          onChange={(e) => {
              setPassword(e.target.value);
          }}
            required
            className="my-3 p-3 rounded-xl bg-[#111] border border-red-200"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="bg-red-400 p-2 m-3 rounded-3xl">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
