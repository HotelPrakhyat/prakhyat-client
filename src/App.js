import './App.css';
import styles from "./AppSass.module.scss"
import {front} from "./assets/index"
import Landing from './components/Landing/Landing';
import Navbar from './components/Landing/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import { useState } from 'react';
function App() {
  const [sidebar, setSidebarr] = useState(false);
  const setSidebar=(x)=>{
    setSidebarr(x);
  }
  return (
    <div className={styles.body}>
      {/* <Navbar/> */}
      {sidebar && <Sidebar setSidebar={setSidebar}/>}
     <Landing sidebar={sidebar} setSidebar={setSidebar}/>
    </div>
  );
}
export default App;
