import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css';

function App() {
  console.log("App.jsx loaded"); // <-- diagnostic
  return (
    <div className="min-h-screen">
      <div style={{padding:20, background:'#fffae6', color:'#1f2937', textAlign:'center', fontWeight:700}}>
        DEBUG: This is the new App.jsx — if you see this box, App.jsx changes are active
      </div>

      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
