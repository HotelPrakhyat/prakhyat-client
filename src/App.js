import './App.css';
import styles from "./AppSass.module.scss"
import Landing from './components/Landing/Landing';
import Navbar from './components/Landing/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from "./components/Landing/Footer/Footer"
import { useState,useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Book from './components/BookNow/Book';
import Room from './components/Rooms/Room';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import AOS from "aos"
import 'aos/dist/aos.css'
function App() {
  const [sidebar, setSidebarr] = useState(false);

  const setSidebar = (x) => {
    setSidebarr(x);
  }
  useEffect(() => {
    AOS.init({ duration: 1500, delay: "50" })
  }, []);
  return (
    <div className={styles.body}>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      {sidebar && <Sidebar setSidebar={setSidebar} />}
      <Routes>
        <Route
          path="/"
          element={
            <Landing/>           
          }
        />
        <Route 
        path='/book'
        element={<div data-aos="fade-down"><Book/></div>}/>
        <Route 
        path='/rooms'
        element={<div data-aos="fade-up"><Room/></div>}/>
        <Route 
        path ="/services"
        element={<Services/>}
        />
        <Route
        path='/contact'
        element={
          <div data-aos="fade-up">
            <ContactUs/>
          </div>
        }
        />
      </Routes>
          <Footer />
    </div>
  );
}
export default App;
