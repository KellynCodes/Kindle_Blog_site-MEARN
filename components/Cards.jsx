import React from "react";
import Link from "next/link";

const Cards = ({ items }) => {
  return (
    <>
      <Link href={`/${items.id}`}>
        <div className="item">
          <span className="itemName">{items.name}</span>
          <img className="itemImg" src={items.img} alt="product_image" />
          <p className="itemsDesc">{items.descriptions} </p>
          <button className="itemButton">ReadMore</button>
        </div>
      </Link>
    </>
  );
};

export default Cards;
