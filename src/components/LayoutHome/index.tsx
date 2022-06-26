import React from "react";
import { useScreen } from "../../providers/Screen";
import SideBar from "../SideBar";
import * as S from "./style";

interface ILayoutHome {
  children?: any;
}

const LayoutHome = (props: ILayoutHome) => {
  const { setShowingHome, showingHome } = useScreen();
  return (
    <>
      <S.Container>
        <SideBar />
        
       
        <S.Content>
          <S.NavBar>
          <h2> {showingHome} </h2>
          <h2>teste</h2>
          </S.NavBar>
        
          {props.children}</S.Content>
      </S.Container>
    </>
  );
};

export default LayoutHome;
