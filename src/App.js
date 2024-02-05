import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./Components/Questions/Questions";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AddQuestions from "./Components/Questions/AddQuestions";

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Questions />
      <Footer/> */}

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Questions />} />
          <Route path="/addQuestion" element={<AddQuestions/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
