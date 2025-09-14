import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
import { FaHome } from "react-icons/fa";
import { CgController } from "react-icons/cg";
import { FaUserShield } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineBackup } from "react-icons/md";

function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/home" className={styles.navLink}>
            <FaHome />
            <span>Início</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/controle-de-acesso" className={styles.navLink}>
            <CgController />
            <span>Controle</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/uso-aceitavel" className={styles.navLink}>
            <FaUserShield />
            <span>Uso </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/seguranca-fisica-ambiental" className={styles.navLink}>
            <MdOutlineSecurity />
            <span>Segurança </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/backup-recuperacao" className={styles.navLink}>
            <MdOutlineBackup />
            <span>Backup </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
