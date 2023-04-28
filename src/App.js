import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { GameProvider } from './context/gameContext.js'
import Achievement from './components/achievement/Achievement'
import Home from './components/home/Home'

function App() {
  return (
    <GameProvider>
      <Router>
        <nav className='flex p-4'>
          <Link className='text-3xl text-slate-400 hover:text-slate-500' to='/'>Home</Link>
        </nav>
      <Routes>
        <Route path='/achievement/:id' element={<Achievement/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
