import { useState } from "react";
import { useEffect } from "react";
import Calculations from "../Calculation";
import Card from "../Card";
import s from "./style.module.css";

function App() {
  useEffect(() => {
    (async () => {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      setProducts(data.products);
    })();
  }, []);

  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    const newArray = products.filter((item) => item.id !== id);
    setProducts(newArray);
  };

  return (
    <div>
      <h1 className={s.header}>Cart</h1>
      <div className={s.cards}>
        {products.map((item) => (
          <Card key={item.id} {...item} deleteProduct={deleteProduct} />
        ))}
      </div>
      <Calculations products={products} />
    </div>
  );
}

export default App;
