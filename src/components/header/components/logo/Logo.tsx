import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import { LogoIcon } from "./components/logoIcon/LogoIcon";
import { Text } from "../../../../components/text/Text";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Logo = () => {
  const theme = useTheme();
  const { black } = theme.colors;
  const font = "'Secular One', sans-serif";

  return (
    <Link href={"/"}>
      <Wrapper>
        <LogoIcon />
        <Text
          size={"30px"}
          weight={"600"}
          color={black}
          fontFamily={font}
          margin={"0 0 0 4px"}
        >
          TradeWay
        </Text>
      </Wrapper>
    </Link>
  );
};
