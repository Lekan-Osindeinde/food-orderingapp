import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PizzaList from "./components/PizzaList";
import Order from "./pages/Orders";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Features />
      <PizzaList />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
