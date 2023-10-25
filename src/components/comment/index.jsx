import { useState } from "react";
import { Avatar } from "../avatar";
import styles from "./styles.module.css";
import { Trash, ThumbsUp } from "phosphor-react";

const photoProfile = "https://www.github.com/luanC14.png";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => onDeleteComment(content);
  const handleLikeComment = () => setLikeCount((newState) => newState + 1);

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={photoProfile} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luan Chrystian</strong>
              <time
                title="17 de Outubro, às 15:41"
                dateTime="2023-10-17 15:41:00"
              >
                Cerca de uma hora atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
