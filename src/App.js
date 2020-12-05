import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Trusted from "./Components/Trusted/Trusted";
import Features from "./Components/Features/Features";
import Jackpots from "./Components/Jackpots/Jackpots";
import Designed from "./Components/Designed/Designed";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import Ultimate from "./Components/Ultimate/Ultimate";
import Purchase from "./Components/Purchase/Purchase";
import Meet from "./Components/Meet/Meet";
import Questions from "./Components/Questions/Questions";
import Download from "./Components/Download/Download";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Trusted />
        <Features />
        <Jackpots />
        <Designed />
        <WhyChoose />
        <Ultimate />
        <Purchase />
        <Meet />
        <Questions />
        <Download />
        <Footer />
    </div>
  );
}

export default App;
