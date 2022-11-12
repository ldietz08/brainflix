import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home.js";
import Upload from "./pages/upload/Upload.js"
import Publish from "./pages/publish/Publish"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/videos/:videoid" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/publish" element={<Publish />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
