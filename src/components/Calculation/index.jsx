import React from "react";
import s from "./style.module.css";

export default function Calculations({ products }) {
  const count = products.reduce((prev, { stock }) => prev + stock, 0);
  const discont = products
    .reduce(
      (prev, { price, discountPercentage, stock }) =>
        prev + (stock * price * discountPercentage) / 100,
      0
    )
    .toFixed(0);

  const oldPrice = products.reduce(
    (prev, { price, stock }) => prev + price * stock,
    0
  );

  return (
    <div className={s.total}>
      <p>TOTAL COUNT: {count}</p>
      <p>DISCOUNT: {discont} $</p>
      <p>PRICE: {oldPrice} $</p>
      <p className={s.price}>
        PRICE WITH DISCOUNT:{" "}
        <span className={s.priceNumber}>{oldPrice - discont} $</span>
      </p>
    </div>
  );
}
