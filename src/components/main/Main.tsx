import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import backgroundImage from "../../../src/assets/Main_background_image.svg";
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
`;
const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  padding: 40px 50px 70px 48px;
`;

export const Main = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Image src={backgroundImage.src} alt={"Background"} />
      <Container>
        <Header />
        <Slogan />
        <ScanAndInvest />
        <InvestOpportunities />
      </Container>
    </Wrapper>
  );
};
