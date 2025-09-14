import styles from "./Logo.module.css"
import logo from "../data/logo-gymtech.png"

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="logo" className={styles.logo}/>
    </div>
  );
}

export default Logo;
