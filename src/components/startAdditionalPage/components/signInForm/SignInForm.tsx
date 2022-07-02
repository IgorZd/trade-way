import React from "react";
import { useFormik } from "formik";
// @ts-ignore
import styled, { useTheme } from "styled-components";
import { media } from "../../../../styles/media";
import { Input } from "../../../input/Input";
import { Button } from "../../../button/Button";
import { useRouter } from "next/router";

export const Form = styled.form`
  width: 440px;
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;
  ${media.tabletS`
  width: 100%;
`}
`;
export const ContainerInput = styled.div``;
export const Label = styled.label`
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: dark2;
  margin: 0 0 6px 5px;
`;
export const ButtonsWrapper = styled.div`
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
export const SendButton = styled(Button)`
  &.disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;

export const SignInForm = ({
  positiveButtonValue,
  negativeButtonValue,
  negativeButtonOnClick,
}: {
  positiveButtonValue: string;
  negativeButtonValue: string;
  negativeButtonOnClick: () => void;
}) => {
  const theme = useTheme();
  const router = useRouter();
  const { black, black2, white, blue } = theme.colors;

  const formik = useFormik({
    validate: (values) => {
      const errors: any = {};

      if (values.userName === "") {
        errors.userName = "Required";
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

      return errors;
    },
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      resetForm();
      router.push("/");
    },
  });

  const disabled = !(!formik.errors.userName && !formik.errors.password);
  const inputsArr = [
    {
      label: "User name",
      nameField: "userName",
      placeholder: "Enter user name",
      error: formik.errors.userName,
      value: formik.values.userName,
      formik: formik.getFieldProps(`userName`),
    },
    {
      label: "Password",
      nameField: "password",
      placeholder: "Enter password",
      error: formik.errors.password,
      value: formik.values.password,
      formik: formik.getFieldProps(`password`),
      type: "password",
    },
  ];

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        {inputsArr.map((item: any, index: number) => {
          const { nameField, placeholder, error, value, formik, type, label } =
            item;

          return (
            <ContainerInput key={index}>
              <Label>{label}</Label>
              <Input
                nameField={nameField}
                placeholder={placeholder}
                error={error}
                value={value}
                formik={formik}
                type={type ? type : "text"}
              />
            </ContainerInput>
          );
        })}
      </Form>
      <ButtonsWrapper>
        <SendButton
          value={positiveButtonValue}
          onClick={() => {
            formik.handleSubmit();
          }}
          className={
            disabled || formik.values.userName.length === 0 ? "disabled" : ""
          }
          width={"200px"}
          backgroundColor={blue}
          color={white}
          borderColor={blue}
          hoverColor={white}
          borderColorHover={blue}
          type={"submit"}
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
    </>
  );
};
