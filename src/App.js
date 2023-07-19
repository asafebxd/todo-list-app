import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Home from "./components/Home";
import { GlobalProvider } from "./context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        maxWidth: "30rem",
        margin: "6rem auto",
      }}
    >
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
