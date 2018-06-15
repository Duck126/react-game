import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "./components/image/Image";
import images from "./image.json";

const App = () => (
  <div>
  <Header/>
  <Image/>
  <Footer/>
  </div>
);

export default App;