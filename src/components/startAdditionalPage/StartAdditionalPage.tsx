import React, { useState } from "react";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { media } from "../../styles/media";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { useFormik } from "formik";

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
const Form = styled.form`
  width: 440px;
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;
  ${media.tabletS`
    width: 100%;
  `}
`;
const ContainerInput = styled.div``;
const Label = styled.label`
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: dark2;
  margin: 0 0 6px 5px;
`;
const Policy = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  width: 440px;
  display: flex;
  justify-content: space-between;
  & > button:first-child {
    &:hover {
      opacity: 0.8;
    }
  }
  ${media.tabletS`
    width: 100%;
    flex-direction: column;
    gap: 16px;
    & > button {
        width: 100%;
    }
  `}
`;
const SendButton = styled(Button)`
  &.disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;

export const StartAdditionalPage = ({
  title,
  positiveButtonValue,
  positiveButtonOnClick,
  negativeButtonValue,
  negativeButtonOnClick,
  description,
}: {
  title: string;
  positiveButtonValue: string;
  positiveButtonOnClick: ((data: any) => void) | (() => void);
  negativeButtonValue: string;
  negativeButtonOnClick: () => void;
  description?: any;
}) => {
  const theme = useTheme();
  const { black, black2, white, blue } = theme.colors;

  const formik = useFormik({
    validate: (values) => {
      const errors: any = {};

      if (values.userName === "") {
        errors.userName = "Required";
      }
      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) &&
        description
      ) {
        errors.email = "Invalid email address";
      }
      if (values.email === "" && description) {
        errors.email = "Required";
      }
      if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(values.password)
      ) {
        errors.password =
          "It should contain at least: one digit, one lower case, one upper case, 8 from the mentioned characters";
      }
      if (values.password === "") {
        errors.password = "Required";
      }
      if (
        values.phoneNumber &&
        !/^(?=.*[0-9])[- +()0-9]+$/.test(values.phoneNumber) &&
        description
      ) {
        errors.phoneNumber = "Invalid phone number";
      }
      if (values.phoneNumber === "" && description) {
        errors.phoneNumber = "Required";
      }
      // if (!values.isAcceptedPolicy) {
      //   errors.isAcceptedPolicy = "You have to accept the policy";
      // }

      return errors;
    },
    initialValues: description
      ? {
          userName: "",
          email: "",
          password: "",
          phoneNumber: "",
          // isAcceptedPolicy: false,
        }
      : {
          userName: "",
          password: "",
        },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
    },
  });

  return (
    <HeaderLayout>
      <Wrapper>
        <Title className={description ? "withDesc" : ""}>{title}</Title>
        {description && description()}
        <Form onSubmit={formik.handleSubmit}>
          <ContainerInput>
            <Label>User name</Label>
            <Input
              nameField={"userName"}
              placeholder={"Enter user name"}
              error={formik.errors.userName}
              value={formik.values.userName}
              formik={formik.getFieldProps(`userName`)}
            />
          </ContainerInput>
          {description && (
            <ContainerInput>
              <Label>E-mail</Label>
              <Input
                nameField={"email"}
                placeholder={"Enter email"}
                error={formik.errors.email}
                value={formik.values.email || ""}
                formik={formik.getFieldProps(`email`)}
              />
            </ContainerInput>
          )}

          <ContainerInput>
            <Label>Password</Label>
            <Input
              nameField={"password"}
              placeholder={"Enter password"}
              error={formik.errors.password}
              value={formik.values.password}
              formik={formik.getFieldProps(`password`)}
              type={"password"}
            />
          </ContainerInput>
          {description && (
            <ContainerInput>
              <Label>Phone Number</Label>
              <Input
                nameField={"phoneNumber"}
                placeholder={"Enter phone number"}
                error={formik.errors.phoneNumber}
                value={formik.values.phoneNumber || ""}
                formik={formik.getFieldProps(`phoneNumber`)}
              />
            </ContainerInput>
          )}
        </Form>
        <ButtonsWrapper>
          <SendButton
            value={positiveButtonValue}
            onClick={() => {
              positiveButtonOnClick(formik.values);
            }}
            className={
              !(
                (
                  !formik.errors.userName &&
                  !formik.errors.email &&
                  !formik.errors.password &&
                  !formik.errors.phoneNumber
                ) /*&&*/
                // !formik.errors.isAcceptedPolicy
              ) || formik.values.userName.length === 0
                ? "disabled"
                : ""
            }
            width={"200px"}
            backgroundColor={blue}
            color={white}
            borderColor={blue}
            hoverColor={white}
            borderColorHover={blue}
          />
          <Button
            value={negativeButtonValue}
            onClick={negativeButtonOnClick}
            width={"200px"}
            backgroundColor={white}
            color={black2}
            borderColor={black}
            hoverColor={white}
            borderColorHover={blue}
          />
        </ButtonsWrapper>
      </Wrapper>
    </HeaderLayout>
  );
};
