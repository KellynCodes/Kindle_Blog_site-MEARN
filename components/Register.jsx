import React, { useState } from "react";
import Head from "next/head";
import Axios from "axios";

const Register = () => {
  const [nameReg, setName] = useState("");
  const [userNameReg, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailReg, setEmail] = useState("");
  const [passwordReg, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const RegUser = (e) => {
    e.preventDefault;
    Axios.post("http://localhost:5000/users/register", {
      name: nameReg,
      username: userNameReg,
      phone: phone,
      email: emailReg,
      country: country,
      password: passwordReg,
      passwordConfirm: passwordConfirm,
    }).then((response) => {
      console.log(response);
    });
    console.log([
      nameReg,
      userNameReg,
      phone,
      emailReg,
      passwordReg,
      country,
      passwordConfirm,
    ]);
  };
  return (
    <div className="Register">
      <Head>
        <title>Relicon | Register User</title>
      </Head>
      <h2>Register To explore the goodies in kindle</h2>
      <form
        action="/users/register"
        onSubmit={(e) => {
          e.preventDefault;
        }}
      >
        <p name="OutputErrorMessage">Oops! Error Occured</p>
        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="name"
            className="RegName"
            placeholder="FullName"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="name"
            className="RegUserName"
            placeholder="Username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="number"
            className="RegPhone"
            placeholder="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="email"
            className="RegEmail"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="text"
            className="RegCountry"
            placeholder="Country"
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>
        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="password"
            className="RegPassword"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="formGroup">
          <div className="icon">Icon</div>
          <input
            type="password"
            className="RegConfirmPassWord"
            placeholder="Confirm Password"
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          />
        </div>

        <div className="btnContainer">
          <button className="button" onClick={RegUser}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
