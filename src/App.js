import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './pages/Home/Header/Header';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
      <h1 className="text-danger">Team 47 Coffee time</h1>
      <h1>This is Sourab</h1>
    </div>
  );
}

export default App;
