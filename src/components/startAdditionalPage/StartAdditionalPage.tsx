import React from "react";
// @ts-ignore
import styled from "styled-components";
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { CreateForm } from "./components/createForm/CreateForm";
import { SignInForm } from "./components/signInForm/SignInForm";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 76px;
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: ${(props: any) => props.theme.colors.black};
  margin-bottom: 20px;
  &.withDesc {
    margin-bottom: 8px;
  }
`;

export const StartAdditionalPage = ({
  title,
  positiveButtonValue,
  negativeButtonValue,
  negativeButtonOnClick,
  description,
}: {
  title: string;
  positiveButtonValue: string;
  negativeButtonValue: string;
  negativeButtonOnClick: () => void;
  description?: any;
}) => {
  return (
    <HeaderLayout>
      <Wrapper>
        <Title className={description ? "withDesc" : ""}>{title}</Title>
        {description && description()}
        {description ? (
          <CreateForm
            positiveButtonValue={positiveButtonValue}
            negativeButtonValue={negativeButtonValue}
            negativeButtonOnClick={negativeButtonOnClick}
          />
        ) : (
          <SignInForm
            positiveButtonValue={positiveButtonValue}
            negativeButtonValue={negativeButtonValue}
            negativeButtonOnClick={negativeButtonOnClick}
          />
        )}
      </Wrapper>
    </HeaderLayout>
  );
};
