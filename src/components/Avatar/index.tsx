 import { AvatarImg } from "./style" 

 interface AvatarPorps{
  hasBorder?: boolean;
  src: string ;
  alt?: string;
 }

export const Avatar = ({src, hasBorder = true, alt}: AvatarPorps) => {
  return (
    <AvatarImg className={hasBorder ? "has-border" : ""} src={src} alt={alt}/>
  )
}

