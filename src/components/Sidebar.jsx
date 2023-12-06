import AppNav from "./AppNav";
import Logo from "./Logo";
import Footer from "./Footer";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cities</p>
      <Footer />
    </div>
  );
}

export default Sidebar;
