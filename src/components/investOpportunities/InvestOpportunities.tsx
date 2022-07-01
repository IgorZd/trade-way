import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import stocksIcon from "../../assets/stocks_icon.svg";
import nftIcon from "../../assets/nft_icon.svg";
import cryptoIcon from "../../assets/crypto_icon.svg";
import { media } from "../../styles/media";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.tablet`
    align-items: center;
  `}
  ${media.phone`
    width: 100%;
  `}
`;
const Title = styled.h4`
  color: ${(props: any) => props.theme.colors.black2};
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 38px;
  ${media.phone`
    font-size: 16px;
    text-align: center;
    margin: 0 0 16px 0;
  `}
`;
const IconsWrapper = styled.div`
  display: flex;
  ${media.phone`
    width: 100%;
    justify-content: space-between;
  `}
`;
const Item = styled.div`
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${(props: any) => props.padding};
  &.center {
    border-left: 2px solid #dddddd;
    border-right: 2px solid #dddddd;
    ${media.phone`
      padding: 0 40px;
    `}
    ${media.phoneS`
      border: none;
      padding: 12px 0;
    `}
  }
  ${media.phoneS`
    padding: 0;
  `}
`;
const Icon = styled.img`
  width: 35px;
`;
const Name = styled.span`
  color: ${(props: any) => props.theme.colors.green};
  font-weight: 800;
  font-size: 20px;
  ${media.phone`
    font-size: 16px;
  `}
`;

export const InvestOpportunities = () => {
  const theme = useTheme();

  const arr = [
    { name: "STOCKS", src: stocksIcon.src },
    { name: "NFT", src: nftIcon.src },
    { name: "CRYPTO", src: cryptoIcon.src },
  ];

  return (
    <Wrapper>
      <Title>One platform. Multiple investment opportunities.</Title>
      <IconsWrapper>
        {arr.map((item: any, index: number) => {
          const { name, src } = item;

          return (
            <Item
              key={index}
              className={index === 1 ? "center" : ""}
              padding={
                index === 0
                  ? "0 40px 0 0"
                  : index === 1
                  ? "0 60px"
                  : "0 0 0 40px"
              }
            >
              <Icon src={src} alt={name} />
              <Name theme={theme}>{name}</Name>
            </Item>
          );
        })}
      </IconsWrapper>
    </Wrapper>
  );
};
