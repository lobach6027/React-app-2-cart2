import React from "react";
import s from "./style.module.css";

export default function Card({
  id,
  title,
  description,
  price,
  category,
  images,
  deleteProduct,
  stock,
  discountPercentage,
}) {
  return (
    <div className={s.card}>
      <span className={s.category}>{category}</span>
      <img className={s.img} src={images[0]} alt="products foto" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={s.number}> Stock: {stock}</div>
      <p className={s.oldPrice}>
        Price: <span className={s.oldPriceNumber}>{price} $</span> 
      </p>
      <div className={s.newPrice}>
        <span>New price: </span>
        <span className={s.newPriceNumber}>
          {(price - (price * discountPercentage) / 100).toFixed()} $
        </span>
      </div>
      <button className={s.deleteButton} onClick={() => deleteProduct(id)}>
        Delete product
      </button>
    </div>
  );
}
