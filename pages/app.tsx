import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import { HeaderLayout } from "../src/layouts/HeaderLayout";

const App = () => {
  const theme = useTheme();

  return (
    <HeaderLayout>
      <h1>App</h1>
    </HeaderLayout>
  );
};

export default App;
