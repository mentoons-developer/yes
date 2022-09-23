import React, { useEffect, useRef } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AudioStories from "./pages/audio-stories/AudioStories";
import ToonlandMovies from "./pages/toonland-movies/ToonlandMovies";
import Comics from "./pages/comics/Comics";
import Faq from "./pages/faq/Faq";
import Music from "./pages/music/Music";
import Interaction from "./pages/interaction/Interaction";
import Theatre from "./pages/thertre/Theatre";
import Workshops from "./pages/workshops/Workshops";
import Mall from "./pages/mall/Mall";
import Library from "./pages/library/Library";
import "./app.css";
import InteractWithUs from "./pages/interaction/interactWithUs/InteractWithUs";
import Careers from "./pages/careers/Careers";
import ScrollToTop from "./components/scrollToTop";
import Header from "./components/header/Header";
import FooterComp from "./pages/footer/Footer";
import SubscribePlan from "./pages/subscribePlan/SubscribePlan";

function App() {
  const location = useLocation().pathname;
  console.log(location);

  return (
    <div>
      {location !== "/home" && <Header />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/audiostory" element={<AudioStories />} />
        <Route path="/music" element={<Music />} />
        <Route path="/interaction" element={<Interaction />} />
        <Route path="/interactWithUs" element={<InteractWithUs />} />
        <Route path="/theatre" element={<Theatre />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/mall" element={<Mall />} />
        <Route path="/library" element={<Library />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/toonlandmovies" element={<ToonlandMovies />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/plans" element={<SubscribePlan />} />
      </Routes>
      <FooterComp />
    </div>
  );
}

export default App;

// {location !== "/home" && (
//   <div style={{ background: "#eef9f3", padding: "0.1rem" }}></div>
// )}
