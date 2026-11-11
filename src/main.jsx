import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createGlobalStyle } from "styled-components";
import Home from "./components/home.jsx";
import Shop from "./components/shop.jsx";
import Cart from "./components/cart.jsx";
import FontStyles from "./components/fontstyles.jsx";

const GlobalStyles = createGlobalStyle`
:root{
  --primary-color: #ffaa00;
  --secondary-color: #b0afaf;
}
body{
  margin: 0px;
}
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <FontStyles />
    <RouterProvider router={router} />
  </StrictMode>,
);
