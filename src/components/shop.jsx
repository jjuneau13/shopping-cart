import styled from "styled-components";
import ShopItem from "./shopitem";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";

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

export default function Shop() {
  const [cart, setCart, shopItems, error, loading] = useOutletContext();
  if (loading) return <StyledDiv>Loading...</StyledDiv>;
  if (error) return <StyledDiv>{error}</StyledDiv>;

  const shop = Object.entries(shopItems).map((entry) => {
    const [id, item] = entry;
    return (
      <ShopItem
        title={item.title}
        image={item.image}
        description={item.category}
        price={item.price}
        key={id}
        amount={cart[id] ?? 0}
        id={id}
        setAmount={(value) => setCart({ ...cart, [id]: value })}
      />
    );
  });

  return <StyledDiv>{shop}</StyledDiv>;
}
