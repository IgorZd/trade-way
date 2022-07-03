import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import Link from "next/link";
import { Button } from "../../../button/Button";
import { useSelector } from "react-redux";
import { selectActivePath } from "../../../../app/state/navSlice";

const Wrapper = styled.div`
  width: calc(100% + 36px);
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  position: absolute;
  z-index: 100;
  top: 0;
  left: -18px;
  border-radius: 20px;
  padding: 74px 30px 30px 30px;
`;
const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Item = styled.li`
  & > a {
    color: ${(props: any) => props.theme.colors.black1};
    font-size: 20px;
    font-weight: ${(props: any) => (props.isActive ? "600" : "200")};
    font-family: "Manrope", sans-serif;
    text-decoration: none;
  }
  &:hover > a {
    font-weight: 600;
  }
`;

export const MobileNav = ({
  navList,
  isOpenModal,
  getStartedOnClick,
  closeMobileNav,
}: {
  navList: { value: string; to: string }[];
  getStartedOnClick: (isMobile?: boolean) => void;
  closeMobileNav: () => void;
  isOpenModal?: boolean;
}) => {
  const theme = useTheme();
  const { black, black2, white, blue } = theme.colors;
  const activePath = useSelector(selectActivePath);

  return isOpenModal ? (
    <Wrapper>
      <List>
        {navList.map((item: { value: string; to: string }, index: number) => {
          const { value, to } = item;

          return (
            <Item
              key={index}
              theme={theme}
              onClick={closeMobileNav}
              isActive={activePath === to}
            >
              <Link href={to}>{value}</Link>
            </Item>
          );
        })}
        <Button
          value={"Get started"}
          onClick={() => {
            getStartedOnClick(true);
          }}
          width={"184px"}
          backgroundColor={white}
          color={black2}
          borderColor={black}
          hoverColor={white}
          borderColorHover={blue}
        />
      </List>
    </Wrapper>
  ) : null;
};
