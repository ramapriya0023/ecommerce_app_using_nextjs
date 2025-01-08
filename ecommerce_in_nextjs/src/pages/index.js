import Header from "@/components/Header";
import ContentSection from "@/components/ContentSection";
import HomeHeader from "@/components/HomeHeader";
import { Divider, useMediaQuery } from "@mui/material";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
export default function Home() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:800px)");
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  return (
    <>
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      {!isMobile && <Header />}
      <HomeHeader toggleDrawer={toggleDrawer} />
      <Divider />
      <ContentSection />
      <Footer />
    </>
  );
}
