import React from "react";
// @ts-ignore
import { useTheme } from "styled-components";
import { useFormik } from "formik";
import { Input } from "../../../input/Input";
import {
  ButtonsWrapper,
  ContainerInput,
  Form,
  Label,
  SendButton,
} from "../signInForm/SignInForm";
import { Button } from "../../../button/Button";
import { PrivacyPolicy } from "../privacyPolicy/PrivacyPolicy";
import { useRouter } from "next/router";

export const CreateForm = ({
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
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (values.email === "") {
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
      if (!/^(?=.*[0-9])[- +()0-9]+$/.test(values.phoneNumber)) {
        errors.phoneNumber = "Invalid phone number";
      }
      if (values.phoneNumber === "") {
        errors.phoneNumber = "Required";
      }
      if (!values.isAcceptedPolicy) {
        errors.isAcceptedPolicy = "You have to accept the policy";
      }

      return errors;
    },
    initialValues: {
      userName: "",
      email: "",
      password: "",
      phoneNumber: "",
      isAcceptedPolicy: false,
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      resetForm();
      router.push("/");
    },
  });

  const disabled = !(
    !formik.errors.userName &&
    !formik.errors.email &&
    !formik.errors.password &&
    !formik.errors.phoneNumber &&
    !formik.errors.isAcceptedPolicy
  );

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
      label: "E-mail",
      nameField: "email",
      placeholder: "Enter email",
      error: formik.errors.email,
      value: formik.values.email,
      formik: formik.getFieldProps(`email`),
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
    {
      label: "Phone Number",
      nameField: "phoneNumber",
      placeholder: "Enter phone number",
      error: formik.errors.phoneNumber,
      value: formik.values.phoneNumber,
      formik: formik.getFieldProps(`phoneNumber`),
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
        <PrivacyPolicy
          error={formik.errors.isAcceptedPolicy}
          value={formik.values.isAcceptedPolicy}
          formik={formik.getFieldProps(`isAcceptedPolicy`)}
          nameField={"isAcceptedPolicy"}
        />
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
