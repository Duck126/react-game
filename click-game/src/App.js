import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Listener from "./components/Listen";
import images from "./image.json";

const App = () => (
  <div>
  <Header/>
  <Listener/>
  <Footer/>
  </div>
);

export default App;