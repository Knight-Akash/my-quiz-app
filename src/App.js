import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Quiz from './components/Quefirebase';
import quiz from './components/QueAns';

function App() {
  return (
    <Quiz />
    // <Router>
    //   <Routes>
    //   {/* <Route
    //             path="/quiz"
    //             element={
    //               <quiz/>
    //             }
    //           /> */}
    //           <Route path="/" element={<Quiz />} />
    //   </Routes>


    // </Router>
  );
}

export default App;
