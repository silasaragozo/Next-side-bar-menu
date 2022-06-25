import React from "react";
import Logo from "../Logo";

import * as S from "./style";
import { HiHome, HiFolder, HiCog } from "react-icons/hi";
const SideBar: React.FC = () => {
  return (
    <>
      <S.Container>
        <div>
          <Logo />
          <S.IconList >
            <HiHome size={32} />
          </S.IconList>
          <S.IconList>
            <HiFolder size={32} />
          </S.IconList>
        </div>
        <S.IconList>
            <HiCog size={32} />
          </S.IconList>
      </S.Container>
    </>
  );
};

export default SideBar;
