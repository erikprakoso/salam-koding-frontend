/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="mt-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
