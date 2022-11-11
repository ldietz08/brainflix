import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home.js"
import Upload from "./pages/upload/Upload.js"
// import App from "./App";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Home />
  </>
  // <BrowserRouter>
  // <React.StrictMode>
  //   <Routes>
  //     <Route path="/" element={<Home/>} />
  //     <Route path="/home" element={<Home/>} />
  //     <Route path="/videos/:videoid" element={<Home/>} />
  //     <Route path="/upload" element={<Upload />} />
  //   <App />
  //   <Routes />
  // </React.StrictMode>
  // <BrowserRouter />
);
