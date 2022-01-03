import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Review from './Pages/TestimonialSection/Review';
import Deliveryinfo from './Pages/Deliveryinfo/Deliveryinfo';
import ProductAdd from './Pages/ProductsSection/AddProductItems/AddProductItems';

function App() {
  return (
    <div className="App">
       <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="review" element={<Review />} />
        <Route path="deliveryinfo" element={<Deliveryinfo />} />
        <Route path="productAdd" element={<ProductAdd />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
