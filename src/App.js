import "./App.css";
import Questions from "./Components/Questions/Questions";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Questions />
      <Footer/>
    </div>
  );
}

export default App;
