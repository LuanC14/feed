import { Comment } from "../comment";
import { Avatar } from "../avatar";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import styles from "./styles.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string,
  role: string,
  avatarUrl: string
}

export enum ContentType {
  Header = 'header',
  Paragraph = 'paragraph',
  Link = 'link'
}

interface Content {
  type: ContentType;
  value: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Array<Content>;
}

export function Post({ author, content, publishedAt }: PostProps) {

  const [comments, setComments] = useState(["Comentário 1"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  function handleNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  function deleteComment(commentToDelete: string) {
    const filteredCommentList = comments.filter((comment) => {
      return comment != commentToDelete;
    });

    setComments(filteredCommentList);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          switch (line.type) {
            case ContentType.Header:
              return <h3 key={line.type}>{line.value}</h3>;
            case ContentType.Paragraph:
              return <p key={line.type}>{line.value}</p>;
            case ContentType.Link:
              return (
                <a key={line.type} href="#">
                  {line.value}
                </a>
              );
            default:
              break;
          }
        })}
      </div>

      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentsList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
