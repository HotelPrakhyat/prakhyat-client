import './App.css';
import styles from "./AppSass.module.scss"
import {front} from "./assets/index"
import Landing from './components/Landing/Landing';
function App() {
  return (
    <div className={styles.body}>
     <Landing/>
    </div>
  );
}

export default App;
