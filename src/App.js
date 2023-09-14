import logo from './logo.svg';
import './App.css';
import SharedComponent from './lib/SharedComponent.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My app</h1>    
        <SharedComponent />
      </header>
    </div>
  );
}

export default App;
