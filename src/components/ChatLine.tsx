import styled from 'styled-components';

const ChatLineStyle = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const ChatOtherLineStyle = styled.div`
  height: auto;
  display: flex;
  align-items: center;
`;

const ProfileStyle = styled.div`
  height: 90%;
  aspect-ratio: 1;
  border: 1px solid black;
  border-radius: 90%;
`;

const TextBoxStyle = styled.textarea`
  max-width: 300px;
  border: 1px solid black;
  display: flex;
  align-items: flex-start;
  font-size: 14px;
`;

function ChatLine({
  isMine,
  imgName,
  text,
}: {
  isMine: boolean;
  imgName: string;
  text: string;
}) {
  if (isMine) {
    return (
      <ChatLineStyle>
        <ProfileStyle>{imgName}</ProfileStyle>
        <TextBoxStyle readOnly value={text} />
      </ChatLineStyle>
    );
  } else {
    return (
      <ChatOtherLineStyle>
        <TextBoxStyle readOnly value={text} />
        <ProfileStyle>{imgName}</ProfileStyle>
      </ChatOtherLineStyle>
    );
  }
}

export default ChatLine;
