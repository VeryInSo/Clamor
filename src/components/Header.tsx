import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function Header() {
  return <HeaderContainer>CLAMOR</HeaderContainer>;
}

export default Header;
