import styled from 'styled-components';
import ChatLine from '../components/ChatLine';
import { useEffect, useState } from 'react';

const DisplayStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainPageStyle = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const InputStyle = styled.input``;

const SubmitButtonStyle = styled.button``;

interface ChatSendData {
  eventName: string;
  userName: string;
  text: string;
}

interface Chat {
  userName: string;
  text: string;
}

function MainPage() {
  const [userName, setUserName] = useState<string>('');
  const [currText, setCurrText] = useState<string>('');
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3456');

    socket.onopen = () => {
      console.log('websocket connected.');
    };

    socket.onmessage = async (event: MessageEvent) => {
      const dataStr = await event.data.text();
      const data: ChatSendData = JSON.parse(dataStr);

      setChats((prevChats) => [
        ...prevChats,
        { userName: data.userName, text: data.text },
      ]);

      console.log(chats);
    };

    socket.onclose = () => {
      console.log('websocket closed.');
    };

    setSocket(socket);

    return () => {
      socket.close();
    };
  }, []);

  function onSubmitClicked() {
    const data: ChatSendData = {
      eventName: 'send',
      userName: userName,
      text: currText,
    };

    socket?.send(JSON.stringify(data));
  }

  return (
    <DisplayStyle>
      <MainPageStyle>
        <InputStyle onChange={(e) => setUserName(e.target.value)} />
        {chats.map((chat, index) => (
          <ChatLine
            key={index}
            isMine={chat.userName === userName}
            imgName={chat.userName}
            text={chat.text}
          />
        ))}
        <InputStyle onChange={(e) => setCurrText(e.target.value)} />
        <SubmitButtonStyle onClick={onSubmitClicked}>Submit</SubmitButtonStyle>
      </MainPageStyle>
    </DisplayStyle>
  );
}

export default MainPage;
