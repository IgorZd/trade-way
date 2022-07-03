import React, { useState } from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import { HeaderLayout } from "../src/layouts/HeaderLayout";
import startImage from "../src/assets/start_image.svg";
import { Button } from "../src/components/button/Button";
import { media } from "../src/styles/media";
import { StartAdditionalPage } from "../src/components/startAdditionalPage/StartAdditionalPage";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 76px;
`;
const Image = styled.img`
  margin-bottom: 52px;
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: ${(props: any) => props.theme.colors.black};
  margin-bottom: 12px;
`;
const Description = styled.h4`
  width: 100%;
  max-width: 500px;
  font-weight: 300;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 68px;
  text-align: center;
  &.additional {
    margin: 0 0 20px 0;
    ${media.tabletS`
        margin: 0 0 34px 0;
    `}
  }
`;
const ButtonsWrapper = styled.div`
  width: 440px;
  display: flex;
  justify-content: space-between;
  & > button:first-child {
    &:hover {
      opacity: 0.8;
    }
  }
  ${media.tabletS`
    width: 100%;
    flex-direction: column;
    gap: 16px;
    & > button {
        width: 100%;
    }
  `}
`;
const Span = styled.span`
  color: ${(props: any) => props.theme.colors.blue};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    opacity: 0.8;
  }
`;

const Start = () => {
  const theme = useTheme();
  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const { black, black2, white, blue } = theme.colors;

  const openSignIn = () => {
    setIsOpenSignInModal(true);
    setIsOpenCreateModal(false);
  };
  const closeSignIn = () => {
    setIsOpenSignInModal(false);
  };
  const openAccountOnClick = () => {
    setIsOpenSignInModal(false);
    setIsOpenCreateModal(true);
  };
  const closeAccountOnClick = () => {
    setIsOpenCreateModal(false);
  };

  const description = () => (
    <Description className={"additional"}>
      {"Do you already have an account? "}
      <Span theme={theme} onClick={openSignIn}>
        Sign In
      </Span>
    </Description>
  );

  return isOpenSignInModal ? (
    <StartAdditionalPage
      title={"Sign In"}
      positiveButtonValue={"Sign In"}
      negativeButtonValue={"Back"}
      negativeButtonOnClick={closeSignIn}
    />
  ) : isOpenCreateModal ? (
    <StartAdditionalPage
      title={"Create your free account"}
      positiveButtonValue={"Create"}
      negativeButtonValue={"Back"}
      negativeButtonOnClick={closeAccountOnClick}
      openSignIn={openSignIn}
      description={description}
    />
  ) : (
    <HeaderLayout isMain>
      <Wrapper>
        <Image src={startImage.src} alt={"Background Image"} />
        <Title theme={theme}>Start Learning</Title>
        <Description>
          Choose your teacher and course over +100K online e-learning with new
          additions published every days
        </Description>
        <ButtonsWrapper>
          <Button
            value={"Sign In"}
            onClick={openSignIn}
            width={"200px"}
            backgroundColor={blue}
            color={white}
            borderColor={blue}
            hoverColor={white}
            borderColorHover={blue}
          />
          <Button
            value={"Create New Account"}
            onClick={openAccountOnClick}
            width={"200px"}
            backgroundColor={white}
            color={black2}
            borderColor={black}
            hoverColor={white}
            borderColorHover={blue}
          />
        </ButtonsWrapper>
      </Wrapper>
    </HeaderLayout>
  );
};

export default Start;
