import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/home/Home";
import CTA from "./components/layout/CTA";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agents from "./components/pages/Agents";
import Agent from "./components/pages/Agent";
import Maps from "./components/pages/Maps";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full overflow-hidden">
        <Navbar />
        {/* WRAP THE CONTENT AFTER NAVBAR IN A MAIN TAG WITH PADDING */}
        <main className="pt-[80px]">
          <Routes>
            <Route excat path="/" element={<Home />} />
            <Route excat path="/agents" element={<Agents />} />
            <Route excat path="/maps" element={<Maps />} />
            <Route
              excat
              path="/agent/:agentName"
              element={<Agent />}
            />
          </Routes>
          <CTA />
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;