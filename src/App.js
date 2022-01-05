import logo from './shecodes-logo.png';
import Dictionary from "./Dictionary"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        <Dictionary/>
       
      </header>
    </div>
  );
}

export default App;
