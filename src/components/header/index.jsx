import styles from "./styles.module.css";
import igniteLogo from '../../assets/ignite_logo.svg'

console.log(igniteLogo)
export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
    </header>
  );
}
