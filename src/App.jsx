import "./App.css";

import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import galleryData from "./data/galleryData";
import { ContainerGallery } from "./components/ContainerGallery";
import { ContainerNews } from "./components/containerNews";

function App() {
  return (
    <>
      <Navbar />
      <Hero title="Racing" content="SCUDERIA FERRARI" />
      <ContainerGallery items={galleryData} />
      <ContainerNews />
    </>
  );
}

export default App;
