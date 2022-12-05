import "./App.css";

import { HashRouter, Routes, Route, Link } from "react-router-dom";

// pages
import { HomePage } from "./pages/HomePage";
import { NoMatchPage } from "./pages/NoMatchPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <nav>
          <Link to={"/"}>Home</Link>
        </nav>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
