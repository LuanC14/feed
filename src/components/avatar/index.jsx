import styles from "./styles.module.css";

export function Avatar({ hasBorder = true, src }) {
  return (
    <div>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
      />
    </div>
  );
}
