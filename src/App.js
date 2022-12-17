import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage/About";
import ContactPage from "./components/ContactPage/Contact";
import CodePage from "./components/Editor(code)/CodePage";
import Frontend from "./components/FrontendPage/Frontend";
import Note from "./components/NotesPage/Note";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
          <Route exact path="/contact" element={<ContactPage />}></Route>
          <Route exact path="/code" element={<CodePage />}></Route>
          <Route exact path="/dsa" element={<Frontend />}></Route>
          <Route exact path="/notes" element={<Note />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
