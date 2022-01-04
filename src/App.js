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
import Payment from './pages/Dashboard/Payment/Payment';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';

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

            <Route path="dashboard" element={<Dashboard />}>
              <Route path="payment" element={<Payment />} />
              <Route path="myorders" element={<MyOrders />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
