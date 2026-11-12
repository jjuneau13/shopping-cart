import styled from "styled-components";
import { NavLink } from "react-router";
import shoppingCart from "../assets/shopping_cart.svg";
import orangeShoppingCart from "../assets/shopping_cart_orange.svg";
import store from "../assets/store.svg";
import orangeStore from "../assets/store_orange.svg";

const NavBar = styled.nav`
  background-color: #2c2c2c;
  display: flex;
  padding: 0px 2rem;
  align-items: center;
  justify-content: space-around;
`;

const SimpleNavLink = styled(NavLink)`
  color: white;
  padding: 20px 30px;
  font-size: 30px;
  text-decoration: none;
`;

const StyledNavLink = styled(SimpleNavLink)`
  &.active {
    color: var(--primary-color);
  }
  &:hover {
    background-color: #3e3e3e;
  }
`;

const StyledObject = styled.img`
  height: 30px;
  margin: 0px 10px;
`;

export default function Nav({ amount }) {
  return (
    <NavBar>
      <SimpleNavLink to="/">Misc Shopping</SimpleNavLink>
      <div>
        <StyledNavLink to="shop">
          {({ isActive }) => (
            <StyledObject
              src={isActive ? orangeStore : store}
              alt="Store"
            ></StyledObject>
          )}
        </StyledNavLink>
        <StyledNavLink to="cart">
          {({ isActive }) => (
            <>
              <StyledObject
                src={isActive ? orangeShoppingCart : shoppingCart}
                alt="Cart"
              ></StyledObject>
              <span>{amount}</span>
            </>
          )}
        </StyledNavLink>
      </div>
    </NavBar>
  );
}
