import { PencilLine } from "phosphor-react";
import { Avatar } from "../avatar/index";

import styles from "./styles.module.css";

const cover =
  "https://images.unsplash.com/photo-1581929955252-64ceec9c2938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50";

const photoProfile = "https://avatars.githubusercontent.com/u/107001881?v=4";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={cover} />

      <div className={styles.profile}>
        <Avatar src={photoProfile} />

        <strong>Luan Chrystian</strong>
        <span>Web Developer</span>
        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
