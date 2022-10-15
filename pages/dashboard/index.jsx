import Link from "next/link";
import React from "react";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="container">
        <div className="sideBar">
          <h2>DashBoard</h2>

          <ul className="dashBoardLinks">
            <li className="links">
              <Link href="/dashboard">Home</Link>
            </li>
            <li className="links">
              <Link href="/dashboard">Analytics</Link>
            </li>
            <li className="links">
              <Link href="/dashboard">Klinton</Link>
            </li>
            <li className="links">
              <Link href="/dashboard">Profile</Link>
            </li>
            <li className="links">
              <Link href="/dashboard">Logout</Link>
            </li>
          </ul>
        </div>

        <div className="hero">
          <div className="userInfo">
            <div className="card">
              <h3>20000</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae officia tenetur in ex dolorem fugit tempora incidunt
                quidem earum voluptatibus.
              </p>
            </div>
            <div className="card">
              <h3>20000</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae officia tenetur in ex dolorem fugit tempora incidunt
                quidem earum voluptatibus.
              </p>
            </div>
            <div className="card">
              <h3>20000</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae officia tenetur in ex dolorem fugit tempora incidunt
                quidem earum voluptatibus.
              </p>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default index;
