import './App.css';
import Login from './Components/Login/Login'
import Routes from './routes'

const App = () => {
  return (
    <div className="App">
      <nav>
        <a href="/">Login</a>
        <a href="/1">Page 1</a>
        <a href="/2">Page 2</a>
        <a href="/3">Page 3</a>
      </nav>
      <Login />
      <Routes />
    </div>
  );
}

export default App;
