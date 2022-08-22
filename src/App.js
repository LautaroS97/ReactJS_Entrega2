import './App.css';
import logo from './assets/img/logo.png';
import Menu from './components/Menu.js';

function App() {
  return (
    <div className="App">
      <header>
        <div className='menu'>
          <div className='logo-container'>
            <img src={logo} alt='Logo' className='logo'/>
          </div>
          <Menu/>
        </div>
      </header>
    </div>
  );
}

export default App;
