import { useEffect, useState } from 'react';

function TestPage() {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3456');

    socket.onopen = () => {
      console.log('websocket connected.');
    };

    socket.onmessage = (event: MessageEvent) => {
      console.log(event.data);
    };

    socket.onclose = () => {
      console.log('websocket closed.');
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const onTestButtonClicked = () => {
    const msg = {
      type: 'message',
      text: input,
    };

    ws!.send(JSON.stringify(msg));
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="메시지를 입력하세요."
      />
      <button onClick={onTestButtonClicked}>Test</button>
    </>
  );
}

export default TestPage;
