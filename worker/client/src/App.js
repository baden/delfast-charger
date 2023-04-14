import logo from './logo.svg';
import './App.css';
import {AuthProvider} from './AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider />
    </div>
  );
}

export default App;
