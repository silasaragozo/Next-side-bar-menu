import React from 'react';

import * as S from "./style"
import logoImg from '../../assets/logo.png'

const Logo: React.FC = () => {
  return (
    <>
      <img  src="../../assets/logo.png"  alt=""/>  
      <img  src={logoImg}  alt=""/> 
    </>
  );
}

export default Logo;