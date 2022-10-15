import React from "react";
import Head from "next/head";
import Link from "next/link";

const Login = () => {
  const Google = () => {
    window.open("/auth/google", "_self");
  };

  const Github = () => {
    window.open("/auth/github", "_self");
  };

  const Facebook = () => {
    window.open("/auth/facebook", "_self");
  };

  const Twitter = () => {
    window.open("/auth/twitter", "_self");
  };

  return (
    <div className="loginPage">
      <Head>
        <title>Kindle | Login</title>
        <meta name="description" content="kindle Login" />
        <link rel="shortcut icon" href="KindleLogo.png" type="image/x-icon" />
      </Head>
      <h2>Please Login First</h2>
      <div className="wrapper">
        <div className="loginLeft">
          <h3 className="loginTitle">Login with one of these Account</h3>

          <div className="loginButton google" onClick={Google}>
            <img src="" alt="" />
            Google
          </div>
          <div className="loginButton github" onClick={Github}>
            <img src="" alt="" />
            Github
          </div>
          <div className="loginButton facebook" onClick={Facebook}>
            <img src="" alt="" />
            Facebook
          </div>
          <div className="loginButton twitter" onClick={Twitter}>
            <img src="" alt="" />
            Twitter
          </div>
          <div className="RegisterPage">
            <p>Don't Have and account</p>
            <h4>
              <a className="RegisterBtn" href="/users/register">
                Register
              </a>
            </h4>
          </div>
        </div>
        <div className="loginRight">
          <form>
            <h3>Login With Your Credentials</h3>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="SubmitButton" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
