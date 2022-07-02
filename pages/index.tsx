import type { NextPage } from "next";
import Head from "next/head";
import { HeaderLayout } from "../src/layouts/HeaderLayout";
import { Slogan } from "../src/components/slogan/Slogan";
import { ScanAndInvest } from "../src/components/scanAndInvest/ScanAndInvest";
import { InvestOpportunities } from "../src/components/investOpportunities/InvestOpportunities";

const Home: NextPage = () => {
  return (
    <HeaderLayout isMain>
      <Head>
        <title>Trade way</title>
      </Head>
      <Slogan />
      <ScanAndInvest />
      <InvestOpportunities />
    </HeaderLayout>
  );
};

export default Home;
