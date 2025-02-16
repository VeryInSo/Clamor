import styled from 'styled-components';

const CircleStyle = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 90%;
  margin-right: 30px;
  margin-left: 30px;
  display:flex;
  justify-content: center;
  align-items: center;
`;

function Circle({ children }: { children: React.ReactNode }) {
  return <CircleStyle>{children}</CircleStyle>;
}

export default Circle;
