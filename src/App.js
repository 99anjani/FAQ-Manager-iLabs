import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./Components/Questions/Questions";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AddQuestions from "./Components/Questions/AddQuestions";
import Search from "./Components/Search/Search";
import Action from "./Components/Action/Action";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Search />} />

          <Route path="/addQuestion" element={<AddQuestions />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
