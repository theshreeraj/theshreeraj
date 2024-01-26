import React from "react";
import Container from "./Container";
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
