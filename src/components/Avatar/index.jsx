 import { AvatarImg } from "./style" 

export const Avatar = ({src, hasBorder = true}) => {
  return (
    <AvatarImg className={hasBorder ? "has-border" : ""} src={src} />
  )
}

