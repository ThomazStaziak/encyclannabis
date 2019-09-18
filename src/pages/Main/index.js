import React, { useState } from "react";

import logo from "../../assets/img/logo.png";

import { Container, Logo } from "./styles";

export default function Main({ history }) {
  const [name, setName] = useState("");

  function handleInput(evt) {
    setName(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    history.push(`/search/${name}`);
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo marijuana" />
        <span>Encyclannabis</span>
      </Logo>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          placeholder="Type the name of your strain"
          type="text"
        />
        <button>Search</button>
      </form>
    </Container>
  );
}
