import { CSSglobal } from "./CSSglobal"
import { Header } from "./components/Header"
import { Wrapper } from "./AppStyle"
import { SideBar } from "./components/SideBar"
import { Post } from "./components/Post"


function App() {
  return (
    <>
      <CSSglobal />
      <Header />

      <Wrapper>
        <SideBar />
        <main>
          <Post/>
          <Post/>
          <Post/>
        </main>
      </Wrapper>
    </>
  )
}

export default App
