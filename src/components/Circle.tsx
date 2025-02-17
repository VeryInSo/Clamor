import styled from 'styled-components';

const CircleStyle = styled.div`
  width: auto;
  height: 80%;
  border: 1px solid black;
  border-radius: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Profile({ children }: { children: React.ReactNode }) {
  return <CircleStyle>{children}</CircleStyle>;
}

export default Profile;
