import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";

const ButtonElement = styled.button`
  width: ${(props: any) => (props.width ? props.width : "120px")};
  height: ${(props: any) => (props.height ? props.height : "40px")};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props: any) => (props.margin ? props.margin : "0")};
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: ${(props: any) => (props.fontSize ? props.fontSize : "14px")};
  color: ${(props: any) =>
    props.color ? props.color : props.theme.colors.white};
  background-color: ${(props: any) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.blue};
  outline: none;
  border: ${(props: any) => (props.borderColor ? "1px solid" : "none")};
  border-color: ${(props: any) =>
    props.borderColor ? props.borderColor : "none"};
  border-radius: ${(props: any) =>
    props.borderRadius ? props.borderRadius : "50px"};
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    color: ${(props: any) =>
      props.hoverColor ? props.hoverColor : props.theme.colors.white};
    background-color: ${(props: any) =>
      props.hoverBackgroundColor
        ? props.hoverBackgroundColor
        : props.theme.colors.blue};
    border-color: ${(props: any) =>
      props.borderColorHover ? props.borderColorHover : "none"};
    box-shadow: ${(props: any) => props.theme.shadows.primary};
  }
`;

export const Button = ({
  value,
  width,
  height,
  onClick,
  margin,
  color,
  hoverColor,
  backgroundColor,
  hoverBackgroundColor,
  borderColor,
  borderColorHover,
  fontSize,
  borderRadius,
  type,
  ...props
}: {
  value: string;
  onClick: Function;
  width?: string;
  height?: string;
  margin?: string;
  color?: string;
  hoverColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  borderColor?: string;
  borderColorHover?: string;
  fontSize?: string;
  borderRadius?: string;
  type?: string;
  className?: string;
}) => {
  const theme = useTheme();

  return (
    <ButtonElement
      onClick={onClick}
      theme={theme}
      width={width}
      height={height}
      margin={margin}
      color={color}
      hoverColor={hoverColor}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      borderColor={borderColor}
      borderColorHover={borderColorHover}
      borderRadius={borderRadius}
      fontSize={fontSize}
      type={type}
      {...props}
    >
      {value}
    </ButtonElement>
  );
};
