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
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Deliveryinfo from './pages/Home/DeliveryInfo/DeliveryInfo';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">

    <AuthProvider>
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
    </AuthProvider>

    </div>
  );
}

export default App;
