import React from "react";
// @ts-ignore
import styled from "styled-components";
import { HeaderLayout } from "../src/layouts/HeaderLayout";
import { createClient } from "../prismicio";
import * as prismic from "@prismicio/client";
import { Content, PostTitle, PostWrapper, Title, Wrapper, Image } from "./blog";

const Description = styled(Content)`
  margin: 0 0 24px 0;
`;

const ONE_DAY_IN_SECONDS = 86400;

export async function getStaticProps(context: any) {
  const client = createClient({});
  const data = await client.query(
    prismic.Predicates.at("document.type", "features1"),
    { orderings: "my.features1.title" }
  );

  return {
    props: {
      data: data.results.map((item: any) => ({
        slug: item.uid,
        title: item.data.title[0].text,
        description: item.data.description[0].text,
        image: item.data.image.url,
      })),
      revalidate: ONE_DAY_IN_SECONDS,
    },
  };
}

const Features = ({ data }: { data: any }) => {
  return (
    <HeaderLayout>
      <Title>Features</Title>
      <Wrapper>
        {data.map((item: any) => {
          const { slug, title, description, image } = item;
          return (
            <PostWrapper key={slug}>
              <PostTitle>{title}</PostTitle>
              <Description>{description}</Description>
              <Image src={image} alt={"IMG"} />
            </PostWrapper>
          );
        })}
      </Wrapper>
    </HeaderLayout>
  );
};

export default Features;
