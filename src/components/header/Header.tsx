import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import { media } from "../../styles/media";
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
  &.openMobileNav {
    z-index: 101;
  }
  ${media.tablet`
  justify-content: center;
  & > button {
    display: none;
  }`}
`;
const BurgerButton = styled.div`
  margin-left: 40px;
  width: 18px;
  height: 18px;
  position: absolute;
  right: 0;
  z-index: 999;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & div {
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: ${({ color, modalIsOpen, black }: any) =>
      modalIsOpen ? black : black};
    transition: all 0.3s ease-in-out;
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${({ color, modalIsOpen, black }: any) =>
        modalIsOpen ? black : black};
      transition: all 0.3s ease-in-out;
    }
    &:before {
      transform: translateY(6px);
    }
    &:after {
      transform: translateY(-6px);
    }
  }
  &.open div {
    transform: translateX(-100%);
    background-color: transparent;
    &:before {
      transform: translateX(100%) rotate(-45deg);
    }
    &:after {
      transform: translateX(100%) rotate(45deg);
    }
  }
  ${media.tablet`
    display: flex;
  `}
`;

export const Header = ({
  navList,
  setIsOpenMobileNav,
  getStartedOnClick,
  isOpenMobileNav,
}: {
  navList: { value: string; to: string }[];
  setIsOpenMobileNav: (value: boolean) => void;
  getStartedOnClick: (isMobile?: boolean) => void;
  isOpenMobileNav?: boolean;
}) => {
  const theme = useTheme();
  const { black, black2, white, blue } = theme.colors;

  return (
    <Wrapper className={isOpenMobileNav ? "openMobileNav" : ""}>
      <Logo />
      <NavList itemsList={navList} />
      <Button
        value={"Get started"}
        onClick={getStartedOnClick}
        width={"162px"}
        backgroundColor={white}
        color={black2}
        borderColor={black}
        hoverColor={white}
        borderColorHover={blue}
      />
      <BurgerButton
        className={isOpenMobileNav && "open"}
        color={black}
        modalIsOpen={isOpenMobileNav}
        black={black}
        onClick={() => {
          setIsOpenMobileNav(!isOpenMobileNav);
        }}
      >
        <div />
      </BurgerButton>
    </Wrapper>
  );
};
