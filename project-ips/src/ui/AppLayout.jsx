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
      </main>
    </div>
  );
}

export default AppLayout;
