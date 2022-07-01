import type { NextPage } from "next";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import Head from "next/head";
import { Main } from "../src/components/main/Main";
import { media } from "../src/styles/media";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 1160px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: any) => props.theme.colors.mint};
  padding: 88px 80px;
  overflow: auto;

  ${media.phone`
    padding: 44px 18px;
  `}
`;

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <Wrapper theme={theme}>
      <Head>
        <title>Trade way</title>
      </Head>
      <Main />
    </Wrapper>
  );
};

export default Home;
