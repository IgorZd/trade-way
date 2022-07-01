import React, { useState } from "react";
// @ts-ignore
import styled from "styled-components";
import backgroundImage from "../../../src/assets/Main_background_image.svg";
import { media } from "../../styles/media";
import { MobileNav } from "../header/components/mobileNav/MobileNav";
import { Header } from "../header/Header";
import { InvestOpportunities } from "../investOpportunities/InvestOpportunities";
import { ScanAndInvest } from "../scanAndInvest/ScanAndInvest";
import { Slogan } from "../slogan/Slogan";

const Wrapper = styled.div`
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

export const Main = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  const navList = [
    { value: "Features", to: "/" },
    { value: "Blog", to: "/" },
    { value: "Premium", to: "/" },
    { value: "App", to: "/" },
  ];

  const closeMobileNav = () => {
    setIsOpenMobileNav(false);
  };
  const getStartedMobileOnClick = () => {
    console.log("Get started");
  };

  return (
    <Wrapper className={isOpenMobileNav ? "openModal" : ""}>
      <Image src={backgroundImage.src} alt={"Background"} />
      <Container>
        <Header
          navList={navList}
          isOpenMobileNav={isOpenMobileNav}
          setIsOpenMobileNav={setIsOpenMobileNav}
        />
        <Slogan />
        <ScanAndInvest />
        <InvestOpportunities />
        <MobileNav
          navList={navList}
          isOpenModal={isOpenMobileNav}
          getStartedOnClick={getStartedMobileOnClick}
          closeMobileNav={closeMobileNav}
        />
      </Container>
    </Wrapper>
  );
};
