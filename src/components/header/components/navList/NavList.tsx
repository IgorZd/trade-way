import React from "react";
import { useSelector } from "react-redux";
// @ts-ignore
import styled from "styled-components";
import { selectActivePath } from "../../../../app/state/navSlice";
import { media } from "../../../../styles/media";
import { NavItem } from "./components/navItem/NavItem";

const List = styled.ul`
  width: calc(100% - 394px);
  max-width: 484px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  ${media.tablet`
    display: none;
  `}
`;

export const NavList = ({ itemsList }: { itemsList: any[] }) => {
  const activePath = useSelector(selectActivePath);

  return (
    <List>
      {itemsList.map((item: any, index: number) => {
        const { value, to } = item;
        return (
          <NavItem
            key={index}
            value={value}
            to={to}
            isActive={activePath === to}
          />
        );
      })}
    </List>
  );
};
