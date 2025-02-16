import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  text-align: center;
`;

function MainPage() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default MainPage;
