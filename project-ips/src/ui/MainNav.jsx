import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/home" className={styles.navLink}>
            <span>Início</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/controle-de-acesso" className={styles.navLink}>
            <span>Controle</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/uso-aceitavel" className={styles.navLink}>
            <span>Uso </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/seguranca-fisica-ambiental" className={styles.navLink}>
            <span>Segurança </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/backup-recuperacao" className={styles.navLink}>
            <span>Backup </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
