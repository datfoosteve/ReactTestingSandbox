import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";
// import logo from "./logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
