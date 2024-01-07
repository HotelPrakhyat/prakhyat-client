import './App.css';
import styles from "./AppSass.module.scss"
import {front} from "./assets/index"
import Landing from './Landing';
import Navbar from './components/Landing/Navbar/Navbar';
function App() {
  return (
    <div className={styles.body}>
      {/* <Navbar/> */}
     <Landing/>
    </div>
  );
}

export default App;
