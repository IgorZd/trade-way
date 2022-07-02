import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import { HeaderLayout } from "../src/layouts/HeaderLayout";

const Features = () => {
  const theme = useTheme();

  return (
    <HeaderLayout>
      <h1>Features</h1>
    </HeaderLayout>
  );
};

export default Features;
