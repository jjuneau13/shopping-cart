import { useOutletContext } from "react-router";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #ececec;
  display: flex;
  width: 75%;
  justify-self: center;
  gap: 30px;
  padding: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  margin: 20px;
  border-radius: 20px;
`;

export default function Cart() {
  const [cart, setCart, shopItems, error, loading] = useOutletContext();
  console.log(new Set(Object.values(cart)));
  const cartSet = new Set(Object.values(cart));
  if (Object.keys(cart) == 0 || (cartSet.has(0) && cartSet.size == 1)) {
    return <StyledDiv>Nothing in your cart!</StyledDiv>;
  }

  return <StyledDiv>{}</StyledDiv>;
}
