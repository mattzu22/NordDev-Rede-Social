import { ThumbsUp, Trash } from "phosphor-react";
import { CommentStyle } from "./style";
import { Avatar } from "../Avatar";
import user from "../../assets/avatar.png";
import { useState } from "react";

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string)=> void
}
export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  function headleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount((state) =>{
      return state + 1
    })
  }

  return (
    <CommentStyle>
      <Avatar hasBorder={false} src={user} alt=""/>

      <div className="comment-box">
        <div className="comment-content">
          <header>
            <div className="author-time">
              <strong>Matheus Macedo</strong>
              <time
                title="16 de dezembro ás 8:13h"
                dateTime="2022-05-11 07:12:21"
              >
                Cerca de 1hr atrás
              </time>
            </div>

            <button title="deletar" onClick={headleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span className="curtidas">{likeCount}</span>
          </button>
        </footer>
      </div>
    </CommentStyle>
  );
};
