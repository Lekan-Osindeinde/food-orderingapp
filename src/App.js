import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PizzaList from "./components/PizzaList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Features />
      <PizzaList />
      <Footer />
    </div>
  );
}

export default App;
