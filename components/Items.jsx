import React from "react";
import Data from "./Data";

const Items = () => {
  return (
    <div>
      <div className="item">
        <span className="itemName">{Data.name}</span>
        <img className="itemImg" src={Data.img} alt="product_image" />
        <p className="itemsDesc">{Data.descriptions} </p>
        <button className="itemButton">ReadMore</button>
      </div>
    </div>
  );
};

export default Items;
