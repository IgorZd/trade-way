import React from "react";
// @ts-ignore
import styled from "styled-components";
import { Ellipse } from "./ellipse/components/ellipse/Ellipse";
import titleDecoration from "../../assets/title_decoration.svg";

const Wrapper = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 76px 0 52px 0;
`;
const Title = styled.h1`
  max-width: 554px;
  font-family: "Manrope", sans-serif;
  font-size: 72px;
  font-weight: 400;
  margin: 0;
  position: relative;
`;
const Description = styled.h4`
  max-width: 420px;
  font-family: "Manrope", sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin: 24px 0 0 0;
`;
const Span = styled.span`
  border-radius: 50%;
  background-color: ${(props: any) => props.theme.colors.mint};
  padding: 11px 20px;
  position: relative;
  & > svg {
    position: absolute;
    left: -16px;
  }
  font-size: 60px;
  font-family: "Kalam", cursive;
`;
const Image = styled.img`
  position: absolute;
  left: 105px;
`;

export const Slogan = () => {
  return (
    <Wrapper>
      <Title>
        <Image src={titleDecoration.src} alt={"Title decoration"} />
        {"The easiest way to "}{" "}
        <Span>
          Spend
          <Ellipse />
        </Span>
        {" money"}
      </Title>
      <Description>
        Everyone is charged their share Say hello to multiplayer payment
      </Description>
    </Wrapper>
  );
};
