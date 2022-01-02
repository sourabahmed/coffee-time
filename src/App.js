import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Review from './Pages/TestimonialSection/Review';

function App() {
  return (
    <div className="App">
       <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="review" element={<Review />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
