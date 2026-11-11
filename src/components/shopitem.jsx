import { styled } from "styled-components";

const StyledDiv = styled.div`
  height: 50vh;
  width: 30vw;
  background-color: #c8c8c8;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const AddtoCart = styled.button`
  background-color: #08c108;
  color: white;
  border: none;
  border-radius: 3px;
  width: 100px;
  height: 25px;
  position: relative;
  bottom: 5px;
`;

const StyledImg = styled.img`
  max-width: 90%;
  max-height: 40%;
  height: auto;
  width: auto;
  margin-top: 30px;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledP = styled.p``;

const StyledInput = styled.input`
  vertical-align: middle;
`;

const CartDiv = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
`;

export default function ShopItem({
  title,
  image,
  description,
  price,
  amount,
  setAmount,
}) {
  const handleChange = (e) => setAmount(Number(e.target.value));

  return (
    <StyledDiv>
      <StyledImg src={image} alt={title} />
      <InnerDiv>
        <h2>{title}</h2>
        <StyledP>{description}</StyledP>
        <p>{price}</p>
        <CartDiv>
          <StyledInput
            name="amount"
            type="number"
            value={amount}
            onChange={handleChange}
          />
          <AddtoCart type="button" onClick={() => setAmount(amount + 1)}>
            Add To Cart
          </AddtoCart>
        </CartDiv>
      </InnerDiv>
    </StyledDiv>
  );
}
