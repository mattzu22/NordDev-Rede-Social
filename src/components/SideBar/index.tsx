import { Avatar } from "../Avatar";
import { StyldeSideBar } from "./style";
import { PencilLine } from "phosphor-react"
import user from "../../assets/avatar.png"

export const SideBar = () => {
  return (
    <StyldeSideBar>
      <img
        className="cover"
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className="profile">
        <Avatar src={user}/>

        <strong>Matheus Macedo</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </StyldeSideBar>
  );
};
