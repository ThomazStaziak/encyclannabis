import React from "react";

import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <MdArrowBack />
        voltar
      </Link>
      <p>Encyclannabis</p>
    </Container>
  );
}
