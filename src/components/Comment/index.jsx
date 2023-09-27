import { ThumbsUp, Trash } from "phosphor-react";
import { CommentStyle } from "./style";

export const Comment = () => {
  return (
    <CommentStyle>
      <img src="https://github.com/mattzu22.png" alt="" />

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

            <button title="deletar">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Dev, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span className="curtidas">20</span>
          </button>
        </footer>
      </div>
    </CommentStyle>
  );
};
