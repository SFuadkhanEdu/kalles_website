import { useState, useEffect } from "react";

import React from "react";
import Hero from "../../components/hero/Hero.jsx";
import Card from "../../components/Card/Card.jsx";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext.jsx";
function Home() {

  const [products, setProducts] = useState([]);
  const sayHi=useContext(MainContext)
  useEffect(() => {
    async function fetching() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }
    fetching();
    console.log(sayHi);
    
  }, [sayHi]);
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
      <Hero></Hero>
      <div className="card_container">
        {products.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          ></Card>
          
        ))}
        {sayHi}
      </div>
    </>
  );
}

export default Home;
