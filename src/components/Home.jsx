import React from "react";
import Container from "./Container";
import shreeraj from "../assets/shreeraj.jpg";
// import intro from "../assets/intro.png";
import theshreerajAvatar from "../assets/theshreeraj avatar.png";
import { ContactIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Projects from "./Projects";
import Connect from "./Connect";
import Hero from "./Hero";

function Home() {
  return (
    <Container id="home">
      <Hero />
      <Projects />
      <Connect />
    </Container>
  );
}

export default Home;
