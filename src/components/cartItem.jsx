import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 40px;
  align-items: center;
`;

const StyledImg = styled.img`
  max-height: 10vh;
  max-width: 10vw;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  gap: 10px;
`;

const StyledSpan = styled.span``;

const Delete = styled.button`
  background-color: #ff5959;
  color: white;
  border-radius: 3px;
  border: none;
  &:hover {
    background-color: red;
  }
`;
const StyledInput = styled.input`
  background-color: rgba(100, 100, 100, 10);
  color: white;
  border: none;
  width: 30px;
  border-radius: 3px;
`;
const StyledH2 = styled.h2``;

export default function CartItem({ title, image, amount, price, onChange }) {
  return (
    <StyledDiv>
      <StyledImg src={image} alt={title} />
      <StyledH2>{title}</StyledH2>
      <Price>
        <StyledInput
          type="number"
          name="amount"
          min={0}
          max={1000}
          value={amount}
          onChange={(e) => {
            if (e.target.value >= 0 && e.target.value <= 1000) {
              onChange(e.target.value);
            }
          }}
        />
        <StyledSpan>${price}</StyledSpan>
        <Delete type="button" onClick={() => onChange(0)}>
          X
        </Delete>
      </Price>
    </StyledDiv>
  );
}
