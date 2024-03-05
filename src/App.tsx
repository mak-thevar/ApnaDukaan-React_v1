import { Outlet } from "react-router-dom";
import Footer from "./components/sharedcomponents/Footer";
import Header from "./components/sharedcomponents/Header";

import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>

    </>
  );
}

export default App;
