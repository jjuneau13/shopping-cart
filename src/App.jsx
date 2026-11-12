import "./App.css";
import Nav from "./components/nav";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState({});
  const [shopItems, setShopItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((data) => {
        const temp = {};
        data.forEach((entry) => {
          const { id, ...rest } = entry;
          temp[id] = { ...rest };
        });
        setShopItems(temp);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  const cartAmount = Object.values(cart).reduce(
    (prev, curr) => Number(prev) + Number(curr),
    0,
  );

  return (
    <>
      <Nav amount={cartAmount}></Nav>
      <Outlet context={[cart, setCart, shopItems, error, loading]} />
    </>
  );
}

export default App;
