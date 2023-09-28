import { CSSglobal } from "./CSSglobal";
import { Header } from "./components/Header";
import { Wrapper } from "./AppStyle";
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mattzu22.png",
      name: "Matheus Macedo",
      role: "web developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "mattzu.devv/programing 👉" },
    ],
    publishedAt: new Date("2023-03-04 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "diego.3g/programing 👉" },
    ],
    publishedAt: new Date("2023-03-04 20:00:00"),
  },
];

function App() {
  return (
    <>
      <CSSglobal />
      <Header />

      <Wrapper>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </Wrapper>
    </>
  );
}

export default App;
