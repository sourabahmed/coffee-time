import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Signin from './pages/Signin/Signin';
import About from './pages/Home/About/About';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Deliveryinfo from './pages/Home/DeliveryInfo/DeliveryInfo';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
          {/* <Route path="about" element={<About />} /> */}

          <Route
              path="deliveryinfo/:deliveryId"
              element={
                <PrivateRoute>
                  <Deliveryinfo />
                </PrivateRoute>
              }
          />

        </Routes>
      </BrowserRouter>




      {/* <Header></Header>
      <Login></Login>
      <h1 className="text-danger">Team 47 Coffee time</h1>
      <h1>This is Sourab</h1> */}
    </div>
  );
}

export default App;
