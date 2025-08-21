import "./App.css";

import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import galleryData from "./data/galleryData";
import { ContainerGallery } from "./components/ContainerGallery";
import { ContainerNews } from "./components/containerNews";
import { Blur } from "./components/Blur";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero title="Racing" content="SCUDERIA FERRARI" />
      <ContainerGallery items={galleryData} />
      <ContainerNews />
      <Blur />
      <Footer />
    </>
  );
}

export default App;
