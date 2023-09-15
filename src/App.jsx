import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/Card/Card'
import Home from './pages/Home/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  return (
    <GoogleOAuthProvider clientId="432032004-ibqrugjvdrn2s98epc8qhl6s8pl110aq.apps.googleusercontent.com">
      <Home />
      {/* <Card /> */}
    </GoogleOAuthProvider>
  )
}

export default App
