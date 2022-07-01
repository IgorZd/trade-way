import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import styled from "styled-components";
import { createPortal } from "react-dom";
import { media } from "../../styles/media";

const ExtraWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0px;

  z-index: 1000000;

  background-color: rgb(0, 0, 0, 0.6);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${media.ultramonitor`
    max-width: 1920px;
`};
`;

const Modal = ({
  children,
  isOpenModal,
  ...props
}: {
  children: any;
  isOpenModal?: any;
  className?: string;
}) => {
  const ref: any = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current = document.getElementById("modal");
    }
    setMounted(true);
  }, []);

  return mounted && isOpenModal
    ? createPortal(
        <ExtraWrapper {...props}>
          <Wrapper>{children}</Wrapper>
        </ExtraWrapper>,
        ref.current || document.body
      )
    : null;
};

export default Modal;
