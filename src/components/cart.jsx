import { useOutletContext } from "react-router";
import styled from "styled-components";
import CartItem from "./cartItem";

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
  font-size: 1.2rem;
`;

export default function Cart() {
  const [cart, setCart, shopItems] = useOutletContext();
  const cartSet = new Set(Object.values(cart));

  if (Object.keys(cart).length == 0 || (cartSet.has(0) && cartSet.size == 1)) {
    return <StyledDiv>Nothing in your cart!</StyledDiv>;
  }

  const items = Object.entries(cart).map((entry) => {
    const [id, itemAmount] = entry;
    if (itemAmount > 0) {
      return (
        <CartItem
          key={id}
          title={shopItems[id].title}
          image={shopItems[id].image}
          amount={itemAmount}
          price={(shopItems[id].price * itemAmount).toFixed(2)}
          onChange={(value) => setCart({ ...cart, [id]: Number(value) })}
        />
      );
    }
  });
  const total = Object.entries(cart).reduce(
    (prev, [key, amount]) => prev + shopItems[key].price * amount,
    0,
  );

  return (
    <StyledDiv>
      {items}
      <p>Total: ${total.toFixed(2)}</p>
    </StyledDiv>
  );
}
