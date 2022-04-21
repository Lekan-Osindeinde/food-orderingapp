import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PizzaList from "./components/PizzaList";
import Order from "./pages/Orders";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Features />
      <PizzaList />
      <Product />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
