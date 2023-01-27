import { useState } from "react";
import { Container } from "./menu";
import Modal from "react-modal";

interface MenuProps {
  itemMenu?: string;
  skilName?: string;
  description?: string;
}

export function Menu({ itemMenu, skilName, description }: MenuProps) {

  return (
    <Container>
      <button className="reactjs">
        React JS
      </button>
      
      <button className="exp-prof">Experiencia Profissional</button>

      <button className="hobbies">Hobbies</button>
    </Container>
  );
}
