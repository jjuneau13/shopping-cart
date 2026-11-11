import { describe, it, expect } from "vitest";
import { render, screen, Outlet } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Shop from "../src/components/shop.jsx";
import ShopItem from "../src/components/shopitem.jsx";
import App from "../src/App.jsx";
import Cart from "../src/components/cart.jsx";

describe("Fetching features", () => {
  it("renders fetched shop item title", () => {
    render(
      <ShopItem
        title={"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}
      />,
    );
    expect(
      screen.getByText(
        /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i,
      ),
    ).toBeInTheDocument();
  });
});

describe("Cart view", () => {
  it("displays that cart is empty", () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: function ParentLayout() {
          return <Outlet context={{ cart: null }} />;
        },
        children: [
          {
            path: "/cart",
            Component: Cart,
          },
        ],
      },
    ]);
    render(<Stub initialEntries={["/cart"]} />);
    expect(screen.getByText("Nothing in your cart!")).toBeInTheDocument();
  });
});
