import React from "react";
// @ts-ignore
import styled from "styled-components";
import { HeaderLayout } from "../src/layouts/HeaderLayout";
import { createClient } from "../prismicio";
import * as prismic from "@prismicio/client";
import { media } from "../src/styles/media";

export const Title = styled.h1`
  width: max-content;
  margin: 52px 0 16px 0;
`;
export const Wrapper = styled.div`
  height: 600px;
  overflow: auto;
`;
export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PostTitle = styled.h2`
  font-size: 24px;
`;
export const Content = styled.p`
  margin: 0 0 4px 0;
`;
const Date = styled.span`
  font-size: 18px;
  font-weight: 100;
`;
export const Image = styled.img`
  width: 400px;
  margin-bottom: 20px;
  ${media.tabletS`
    width: 100%;
  `}
`;

const ONE_DAY_IN_SECONDS = 86400;

function convertPrismicToData(prismic: any) {
  return {
    date: prismic.data.publishDate || null,
    slug: prismic.uid,
    title: prismic.data.title,
    content: prismic.data.content,
    image: prismic.data.image,
  };
}

export async function getStaticProps(context: any) {
  const client = createClient({});
  const data = await client.query(
    prismic.Predicates.at("document.type", "blog-post"),
    { orderings: "my.blog-post.publishDate" }
  );

  const posts = data.results.map(convertPrismicToData);

  return {
    props: {
      posts: posts,
      revalidate: ONE_DAY_IN_SECONDS,
    },
  };
}

const Blog = ({ posts }: { posts: any }) => {
  return (
    <HeaderLayout>
      <Title>Blog</Title>
      <Wrapper>
        {posts.map((item: any) => {
          const { content, date, image, slug, title } = item;
          return (
            <PostWrapper key={slug}>
              <PostTitle>
                {title[0].text}
                <Date>{`. (${date})`}</Date>
              </PostTitle>
              <Image src={image.url} alt={"IMG"} />
              {content.map((el: any, index: number) => {
                return <Content key={index}>{el.text}</Content>;
              })}
            </PostWrapper>
          );
        })}
      </Wrapper>
    </HeaderLayout>
  );
};

export default Blog;
