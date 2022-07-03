import React, { useEffect, useState } from "react";
// @ts-ignore
import styled from "styled-components";
import { media } from "../styles/media";
import backgroundImage from "../assets/Main_background_image.svg";
import { Header } from "../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsOpenMobileNav,
  selectNavList,
  setActivePath,
  setIsOpenMobileNav,
} from "../app/state/navSlice";
import { MobileNav } from "../components/header/components/mobileNav/MobileNav";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: any) => props.theme.colors.mint};
  padding: 88px 80px;
  overflow: auto;
  &.main {
    min-height: 1160px;
  }

  ${media.phone`
    height: 100vh;
    padding: 44px 18px;
    &.main {
      height: auto;
      min-height: auto;
  }
  `}
`;
const Box = styled.div`
  width: 100%;
  max-width: 1440px;
  box-sizing: border-box;
  background-color: ${(props: any) => props.theme.colors.white};
  border-radius: ${(props: any) => props.theme.borderRadius.primary};
  position: relative;
  padding: 0 30px;
  box-shadow: 10px 90px 50px -32px rgb(25 29 40 / 20%);
  ${media.phone`
    padding: 0 18px;
  `}
`;
const Image = styled.img`
  width: calc(100% - 60px);
  height: 100%;
  position: absolute;
  left: 30px;
  top: 0px;
  z-index: 1;
  object-fit: cover;
  object-position: 50% 50%;
  ${media.tablet`
    object-fit: contain;
    object-position: 50% 60%;
  `}
  ${media.phoneS`
    display: none;
  `}
`;
const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  padding: 40px 50px 70px 48px;

  ${media.tablet`
    padding: 30px 0 40px 0;

`}
  ${media.phone`
    padding: 18px 0 28px 0;
  `}
`;

export const HeaderLayout = ({
  children,
  isMain,
}: {
  children: any;
  isMain?: boolean;
  className?: string;
}) => {
  const dispatch = useDispatch();
  const isOpenMobileNav = useSelector(selectIsOpenMobileNav);
  const navList = useSelector(selectNavList);
  const router = useRouter();
  const currentPath = router.pathname;

  const setIsOpenMobileNavigation = (value: boolean) => {
    dispatch(setIsOpenMobileNav({ value }));
  };
  const closeMobileNav = () => {
    dispatch(setIsOpenMobileNav({ value: false }));
  };
  const getStartedOnClick = (isMobile?: boolean) => {
    router.push("/start");
    isMobile && closeMobileNav();
  };

  useEffect(() => {
    dispatch(setActivePath({ value: currentPath }));
  }, [currentPath]);

  return (
    <Wrapper className={isMain ? "main" : ""}>
      <Box>
        {isMain && <Image src={backgroundImage.src} alt={"Background"} />}
        <Container>
          <Header
            navList={navList}
            isOpenMobileNav={isOpenMobileNav}
            setIsOpenMobileNav={setIsOpenMobileNavigation}
            getStartedOnClick={getStartedOnClick}
          />
          {children}
          <MobileNav
            navList={navList}
            isOpenModal={isOpenMobileNav}
            getStartedOnClick={getStartedOnClick}
            closeMobileNav={closeMobileNav}
          />
        </Container>
      </Box>
    </Wrapper>
  );
};
