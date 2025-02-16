import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
