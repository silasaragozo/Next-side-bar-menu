import React from 'react';
import Logo from '../Logo';

import * as S from "./style"

const SideBar: React.FC = () => {
  return (
    <>
        <S.Container>
            <Logo/>
        </S.Container>   
    </>
  );
}

export default SideBar;