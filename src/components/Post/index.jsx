import { useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { PostStyle } from "./style";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const Post = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState(["Post mt bacana!"]);

  const [newComment, setNewComment] = useState("");

  const publishedAtFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleNewCommentChange() {
    setNewComment(event.target.value);
    event.target.setCustomValidity('')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleredOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleredOne);
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const isNewCommentEmpty = newComment.length === 0

  return (
    <PostStyle className="post">
      <header>
        <div className="author">
          <Avatar src={author.avatarUrl} />

          <div className="author-info">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="content">
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}

        <p className="links">
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className="form-comment">
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          name="comment"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
          value={newComment}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
        </footer>
      </form>

      <div className="comment-list">
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
    </PostStyle>
  );
};
