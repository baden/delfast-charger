import logo from './logo.svg';
import './App.css';
import {AuthProvider} from './AuthProvider';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <AuthProvider />
      </div>
    </div>
  );
}

export default App;
