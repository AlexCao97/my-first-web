import React from "react";
import BasicAppBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout(props) {
  return (
    <div className="content">
      <BasicAppBar {...props} />
      <Footer />
    </div>
  );
}
