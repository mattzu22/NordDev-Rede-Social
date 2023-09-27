import { HeaderStyle } from "./style"
import logoNord from "../../assets/logo-nord.png"

export const Header = () => {
  return (
    <HeaderStyle>
        <img src={logoNord} alt="logo da nord" />
        <h3>Feed</h3>
    </HeaderStyle>
  )
}

