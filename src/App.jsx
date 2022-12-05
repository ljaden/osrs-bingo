import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import { HomePage } from "./pages/HomePage";
import { NoMatchPage } from "./pages/NoMatchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to={"/"}>Home</Link>
        </nav>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
