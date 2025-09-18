import { Outlet } from "react-router";
import SideBar from "./SideBar.jsx";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <SideBar />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.appLayoutTitle}>
            Políticas de Segurança da Informação
          </h1>
        </header>

        {/* main scroll container — header is inside it so it will scroll away */}
        <div className={styles.content}>
          <Outlet />
        </div>
        <footer className={styles.footer}>
          <h1 className={styles.footerh1}>
            Desenvolvido para uma atividade de IPS
          </h1>
          <h2 className={styles.footerh2}>
            Por{" "}
            <a href="https://www.linkedin.com/in/guilherme-rezende-518297235/" target="_blank" rel="noopener noreferrer">
              <span>Guilherme Rezende</span>
            </a>{" "}
            e GymTech Inc &copy; 2025
          </h2>
        </footer>
      </main>
    </div>
  );
}

export default AppLayout;
