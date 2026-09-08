import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Company from "./pages/Company";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </>
  );
}

export default App;
