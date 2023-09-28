
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { PostStyle } from "./style";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";


export const Post = ({author, content, publishedAt}) => {
  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })


  return (
    <PostStyle className="post">
      <header>
        <div className="author">
          <Avatar src={author.avatarUrl}/>

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
        {content.map(line => {
          if(line.type === "paragraph"){
            return <p>{line.content}</p>
          }else if(line.type === "link"){
            return <p><a href="#">{line.content}</a></p>
          }
        })}

        <p className="links">
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className="form-comment">
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className="comment-list">
          <Comment />
      </div>
    </PostStyle>
  );
};
