import React from "react";
// @ts-ignore
import styled from "styled-components";
import { Label } from "../signInForm/SignInForm";
import { Checkbox } from "./components/checkbox/Checkbox";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const Text = styled(Label)`
  margin: 0 0 0 8px;
`;

export const PrivacyPolicy = ({
  error = "",
  value,
  formik,
  nameField,
}: {
  formik: any;
  error?: string;
  value: boolean;
  nameField: string;
}) => {
  return (
    <Wrapper>
      <Checkbox
        error={error}
        value={value}
        formik={formik}
        nameField={nameField}
      />
      <Text>I accept the terms and privacy policy</Text>
    </Wrapper>
  );
};
