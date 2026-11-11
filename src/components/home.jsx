import styled from "styled-components";

const StyledMain = styled.main`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledH2 = styled.h2`
  color: #333333;
  font-size: 3rem;
  font-weight: 300;
  font-family: "Roboto", Arial;
`;

const StyledP = styled.p``;

export default function Home() {
  return (
    <StyledMain>
      <StyledH2>Welcome to my online store!</StyledH2>
      <StyledP>We have new arrivals every week</StyledP>
    </StyledMain>
  );
}
