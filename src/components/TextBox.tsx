import styled from 'styled-components';

const TextBoxStyle = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid black;
  display:flex;
  justify-content: center;
  align-items: center;
`;

function TextBox({children}: { children: React.ReactNode }) {
  return (
    <TextBoxStyle>
      <p>{ children }</p>
    </TextBoxStyle>
  );
}

export default TextBox;
