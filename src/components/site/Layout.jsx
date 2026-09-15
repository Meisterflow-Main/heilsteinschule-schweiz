import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import FloatingActions from "./FloatingActions";

export default function Layout() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <FloatingActions />
    </div>
  );
}