import React from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import { HeaderLayout } from "../src/layouts/HeaderLayout";

const Blog = () => {
  const theme = useTheme();

  return (
    <HeaderLayout>
      <h1>Blog</h1>
    </HeaderLayout>
  );
};

export default Blog;
