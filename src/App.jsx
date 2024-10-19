import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Balloon from "./section/Home";
import Halaman1 from "./section/Halaman1";
import Halaman2 from "./section/Halaman2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Halaman1 />} />
        <Route path="/halaman2" element={<Halaman2 />} />
        <Route path="/halaman3" element={<Balloon />} />
      </Routes>
    </Router>
  );
}

export default App;
