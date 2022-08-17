import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminProvider from "./contexts/AdminProvider";
import ClientProvider from "./contexts/ClientProvider";
import AdminEditPage from "./pages/AdminEditPage";
import AdminPage from "./pages/AdminPage";
import MainPage from "./pages/MainPage";
import Figurines from "./pages/Figurines";
import TShirts from "./pages/TShirts";
import Contacts from "./pages/Contacts";

function Navigation() {
  return (
    <ClientProvider>
      <AdminProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin-edit/:id" element={<AdminEditPage />} />
            <Route path="/Figurines" element={<Figurines />} />
            <Route path="T-shirts" element={<TShirts />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </ClientProvider>
  );
}

export default Navigation;
