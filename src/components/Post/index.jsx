
import { Comment } from "../Comment";
import { PostStyle } from "./style";

export const Post = () => {
  return (
    <PostStyle className="post">
      <header>
        <div className="author">
          <img src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

          <div className="author-info">
            <strong>Matheus Macedo</strong>
            <span>Web Developes</span>
          </div>
        </div>

        <time title="16 de dezembro ás 8:13h" dateTime="2022-05-11 07:12:21">
          Publicado há 1h
        </time>
      </header>

      <div className="content">
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="#">jane.design/doctorcare 👉</a>
        </p>

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
