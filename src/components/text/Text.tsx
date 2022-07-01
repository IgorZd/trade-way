import React, { ReactNode } from "react";
// @ts-ignore
import styled from "styled-components";

const Span = styled.span`
  font-family: ${(props: any) =>
    props.fontFamily ? props.fontFamily : 'Poppins", sans-serif'};
  font-weight: ${(props: any) => props.weight};
  font-size: ${(props: any) => props.size};
  line-height: ${(props: any) => props.lineHeight};
  color: ${(props: any) => props.color};
  margin: ${(props: any) => (props.margin ? props.margin : "0")};
  text-align: ${(props: any) => (props.textAlign ? props.textAlign : "start")};
  transition: all 0.3s ease;
  &:hover {
    color: ${(props: any) => props.hoverColor};
  }
`;

export const Text = ({
  children,
  onClick,
  color,
  hoverColor,
  weight,
  margin,
  lineHeight,
  size,
  textAlign,
  fontFamily,
  ...props
}: {
  children: any;
  onClick?: ReactNode;
  color?: string;
  hoverColor?: string;
  weight?: string;
  margin?: string;
  lineHeight?: string;
  size?: string;
  textAlign?: string;
  fontFamily?: string;
  className?: string;
}) => {
  return (
    <Span
      onClick={onClick}
      color={color}
      hoverColor={hoverColor}
      weight={weight}
      margin={margin}
      lineHeight={lineHeight}
      size={size}
      textAlign={textAlign}
      fontFamily={fontFamily}
      {...props}
    >
      {children}
    </Span>
  );
};
