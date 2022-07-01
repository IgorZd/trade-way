import React from "react";
// @ts-ignore
import styled from "styled-components";
import { NavItem } from "./components/navItem/NavItem";

const List = styled.ul`
  width: calc(100% - 394px);
  max-width: 484px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavList = ({ itemsList }: { itemsList: any[] }) => {
  return (
    <List>
      {itemsList.map((item: any, index: number) => {
        const { value, to } = item;
        return <NavItem key={index} value={value} to={to} />;
      })}
    </List>
  );
};
