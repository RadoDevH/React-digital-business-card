import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-card h-card text-white bg-[#1a1b21] rounded-lg overflow-hidden">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
};
export default App;
