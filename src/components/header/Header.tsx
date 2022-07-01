import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import { Button } from "../button/Button";
import { Logo } from "./components/logo/Logo";
import { NavList } from "./components/navList/NavList";

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
`;

export const Header = () => {
  const theme = useTheme();
  const { black, black2, white, blue } = theme.colors;
  const itemsList = [
    { value: "Features", to: "/" },
    { value: "Blog", to: "/" },
    { value: "Premium", to: "/" },
    { value: "App", to: "/" },
  ];
  return (
    <Wrapper>
      <Logo />
      <NavList itemsList={itemsList} />
      <Button
        value={"Get started"}
        onClick={() => {
          console.log("Get started");
        }}
        width={"162px"}
        backgroundColor={white}
        color={black2}
        borderColor={black}
        hoverColor={white}
        borderColorHover={blue}
      />
    </Wrapper>
  );
};
