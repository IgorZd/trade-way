import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import { LogoIcon } from "./components/logoIcon/LogoIcon";
import { Text } from "../../../../components/text/Text";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsOpenMobileNav,
  setIsOpenMobileNav,
} from "../../../../app/state/navSlice";
import { useWindowSize } from "../../../../styles/style.context";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Logo = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const windowWidth = useWindowSize()[0];
  const { black } = theme.colors;
  const font = "'Secular One', sans-serif";
  const isOpenMobileNav = useSelector(selectIsOpenMobileNav);

  const closeMobileNav = () => {
    windowWidth < 769 &&
      isOpenMobileNav &&
      dispatch(setIsOpenMobileNav({ value: false }));
  };

  return (
    <Link href={"/"}>
      <Wrapper onClick={closeMobileNav}>
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
