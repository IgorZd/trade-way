import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import Link from "next/link";

const Item = styled.li`
  width: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.active {
    & > a {
      font-weight: 600;
    }
  }
  & > a {
    color: ${(props: any) => props.theme.colors.black1};
    font-family: "Manrope", sans-serif;
    font-weight: 200;
    text-decoration: none;
  }
  &:hover > a {
    font-weight: 600;
  }
`;

export const NavItem = ({
  value,
  to,
  isActive,
}: {
  value: string;
  to: string;
  isActive?: boolean;
}) => {
  const theme = useTheme();

  return (
    <Item theme={theme} className={isActive ? "active" : ""}>
      <Link href={to}>{value}</Link>
    </Item>
  );
};
