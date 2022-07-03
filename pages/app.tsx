import React from "react";
import { HeaderLayout } from "../src/layouts/HeaderLayout";
import { createClient } from "../prismicio";
import * as prismic from "@prismicio/client";
import { Content, Title } from "./blog";

export async function getStaticProps(context: any) {
  const client = createClient({});
  const data = await client.query(
    prismic.Predicates.at("document.type", "content")
  );

  return {
    props: {
      data: {
        slug: data.results[1].uid,
        title: data.results[1].data.title[0].text,
        description: data.results[1].data.content[0].text,
      },
    },
  };
}

const App = ({ data }: { data: any }) => {
  const { title, description } = data;

  return (
    <HeaderLayout>
      <Title>{title}</Title>
      <Content>{description}</Content>
    </HeaderLayout>
  );
};

export default App;
