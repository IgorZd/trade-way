import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import { HeaderLayout } from "../src/layouts/HeaderLayout";

const Premium = () => {
  const theme = useTheme();

  return (
    <HeaderLayout>
      <h1>Premium</h1>
    </HeaderLayout>
  );
};

export default Premium;
