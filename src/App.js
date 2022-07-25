import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Products from './pages/Products';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="dashboard" element={<h1>Dashboard</h1>}>
          <Route path="stats" element={<h1>Stats</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
