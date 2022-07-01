import type { NextPage } from "next";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import Head from "next/head";
import { Header } from "../src/components/header/Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${(props: any) => props.theme.colors.mint};
  padding: 88px 80px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props: any) => props.theme.colors.white};
  border-radius: ${(props: any) => props.theme.borderRadius.primary};
`;

const Title = styled.h1``;

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <Wrapper theme={theme}>
      <Head>
        <title>Trade way</title>
      </Head>
      <Container theme={theme}>
        <Header />
      </Container>
    </Wrapper>
  );
};

export default Home;
