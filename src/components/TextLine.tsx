import styled from 'styled-components';
import Circle from './Circle';
import TextBox from './TextBox';

const TextLineStyle = styled.div`
  width: 320px;
  height: 50px;
  padding: 100px 0 0 0;
  display: flex;
  text-align:center;
`;

function TextLine({ isMine }: { isMine: boolean }) {
  if (isMine) {
    return (
      <TextLineStyle>
        <Circle>Img</Circle>
        <TextBox>Text</TextBox>
      </TextLineStyle>
    );
  } else {
    return (
      <TextLineStyle>
        <TextBox>Text</TextBox>
        <Circle>Img</Circle>
      </TextLineStyle>
    );
  }
}

export default TextLine;
