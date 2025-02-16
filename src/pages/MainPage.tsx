import styled from 'styled-components';
import TextLine from '../components/TextLine';

const DisplayStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainPageStyle = styled.div`
  width: 80%;
  height: 100%;
`;

function MainPage() {
  return (
    <DisplayStyle>
      <MainPageStyle>
        <TextLine isMine={true}></TextLine>
        <TextLine isMine={false}></TextLine>
      </MainPageStyle>
    </DisplayStyle>
  );
}

export default MainPage;
