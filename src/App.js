import React, { useState } from "react";
import Navbar from "./Navbar";
import Main from "./components/Main";
import { Menu } from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export const AppContext = createContext();

export default function App() {
  const [username, setUsername] = useState("Assia");

  return (
    <QueryClientProvider client={client}>
    <AppContext.Provider value={{ username, setUsername }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>
    </QueryClientProvider> 
  );
}
