import React from "react";
import BasicAppBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="content">
      <BasicAppBar />
      {children}
      <Footer />
    </div>
  );
}
