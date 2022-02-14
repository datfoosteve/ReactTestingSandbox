import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
