import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Main } from "./Pages/Main";
import NavBar from "./Pages/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Insights from "./insights/Insights";
import View from "./View/View";
// import Polymer from "./Polymer/Polymer";
// import Login from "./Polymer/Login";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/insights" element={<Insights />} />
          <Route path="/view" element={<View />} />

          {/* <Route path="/buildPolymer" element={<Polymer />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
