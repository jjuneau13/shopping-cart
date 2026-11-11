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
        setShopItems(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Nav></Nav>
      <Outlet context={[cart, setCart, shopItems, error, loading]} />
    </>
  );
}

export default App;
