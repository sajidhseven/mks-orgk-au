import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Intro from "./components/Intro";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Comittee from "./components/Comittee";
import AboutKannadaBhavana from "./components/AboutKannadaBhavana";
import Library from "./components/Library";
import BookReadingClub from "./components/BookReadingClub";
import Melnudi from "./components/Melnudi";
import Contact from "./components/Contact";
import FacebookFeed from "./components/FacebookFeed";
import DonateUs from "./components/DonateUs";
import AnnualMembershipForm from "./components/AnnualMembershipForm";
import LifeMembershipForm from "./components/LifeMembershipForm";
import Sponsors from "./components/Sponsors";


import "./style.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/comittee" element={<Comittee />} />
        <Route path="/about-kannada-bhavana" element={<AboutKannadaBhavana />} />
        <Route path="/library" element={<Library />} />
        <Route path="/book-reading-club" element={<BookReadingClub />} />
        <Route path="/melnudi" element={<Melnudi />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facebook-feed" element={<FacebookFeed />} />
        <Route path="/donate-kannada-bhavana" element={<DonateUs />} />
        <Route path="/annual-membership" element={<AnnualMembershipForm />} />
        <Route path="/life-membership" element={<LifeMembershipForm />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
