import React from "react";
import { HeaderWrap, NaviLink } from "./Header.styled";
import { Container } from "../../Container";

export const Header = () => {
  return (
    <Container>
      <HeaderWrap>
        <NaviLink to={"/"}>Home</NaviLink>
        <NaviLink to={"/teachers"}>Teachers</NaviLink>
        <NaviLink to={"/favorites"}>Favorites</NaviLink>
      </HeaderWrap>
    </Container>
  );
};
