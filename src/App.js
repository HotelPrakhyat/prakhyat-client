import './App.css';
import styles from "./AppSass.module.scss"
import Landing from './components/Landing/Landing';
import Navbar from './components/Landing/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from "./components/Landing/Footer/Footer"
import { useState,useEffect } from 'react';
import { Routes, Route,useLocation } from "react-router-dom";
import Book from './components/BookNow/Book';
import Room from './components/Rooms/Room';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import AOS from "aos"
import 'aos/dist/aos.css'
import About from './components/About/AboutF';
import EventsPage from './components/EventsPage/EventsPage';
function App() {
  const [sidebar, setSidebarr] = useState(false);
  const location = useLocation();

  const setSidebar = (x) => {
    setSidebarr(x);
  }
  useEffect(() => {
    AOS.init({ duration: 1500, delay: "50" })
  }, []);
  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
        <Route
        element={<About/>}
        path='/about'
        />
        <Route
        element={<EventsPage/>}
        path="/events"
        />
      </Routes>
          <Footer />
    </div>
  );
}
export default App;
