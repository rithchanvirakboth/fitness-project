import Navbar from "@/components/navbar";
import Home from "@/pages/Home";
import { useEffect, useState } from "react";
import Benefit from "./pages/Benefit";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import OurClasses from "./pages/OurClasses";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } if(window.scrollY !== 0) setIsTopOfPage(false);
      }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 
  return (
  <div className="app bg-gray-20">
    <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage} />
    <Benefit setSelectedPage={setSelectedPage} />
    <OurClasses setSelectedPage={setSelectedPage} />
    <ContactUs setSelectedPage={setSelectedPage} />
    <Footer />
  </div>
  )
}

export default App
