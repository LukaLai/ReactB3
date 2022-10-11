import './App.css';
import Component1 from './components/Component1';
import LoginPage from './components/Login';


function App() {
  return (
    <div className="App">
      <Component1 test={'bonjour'}/>
      <LoginPage/>
    </div>
  );
}

export default App;
