import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/Card/Card'
import Home from './pages/Home/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Route, Routes } from "react-router-dom";
import Game from './pages/Game/Game';

function App() {

  return (
    <GoogleOAuthProvider clientId="432032004-ibqrugjvdrn2s98epc8qhl6s8pl110aq.apps.googleusercontent.com">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/game" element={<Game />} />
      </Routes>
      {/* <Card /> */}
    </GoogleOAuthProvider>
  )
}

export default App
