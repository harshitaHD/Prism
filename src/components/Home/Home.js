import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import CodeCard from "./CodeCard";
import FrontendCard from "./FrontendCard";
import NotesCard from "./NotesCard";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="desc">
        <h1 className="home-heading">
          Welcome to,
          <span>PRISM</span>
        </h1>
        <p className="para">
          Code, practice and manage your notes easily with our smart, handy and
          simplified coding engine.
        </p>
        <p className="para">So, let's get started...</p>
      </div>
      <div className="cards">
        <CodeCard />
        <FrontendCard />
        <NotesCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
