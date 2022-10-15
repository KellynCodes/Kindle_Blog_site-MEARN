import React from "react";

const Form = () => {
  return (
    <form className="dashboardFormContainer" action="/dashboard">
      <div className="inputs">
        <div className="inputContainer">
          <input type="text" placeholder="Header" className="dashboardInput" />
          <input type="text" placeholder="User" className="dashboardInput" />
        </div>
        <div className="inputContainer">
          <input type="text" placeholder="fill" className="dashboardInput" />
          <input type="text" placeholder="fill" className="dashboardInput" />
        </div>
        <div className="inputContainer">
          <input type="text" placeholder="fill" className="dashboardInput" />
          <input type="text" placeholder="fill" className="dashboardInput" />
        </div>
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>

      <button type="submit" className="dashboardFormBtn">
        Post
      </button>
    </form>
  );
};

export default Form;
