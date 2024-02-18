import { baseTheme } from "../../baseTheme";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 60px;

  margin-bottom: 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${baseTheme.colors.light_orange};
`;

export const NaviLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: ${baseTheme.colors.dark_pink};
  &.active {
    color: ${baseTheme.colors.orange};
  }
  &:hover {
    color: ${baseTheme.colors.orange_pink};
  }
`;
