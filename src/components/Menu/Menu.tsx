import { useState } from "react";
import { Container } from "./menu";
import { Modal } from "../Modal/Modal";
import { FaReact } from "react-icons/fa"

export function Menu() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Container>
      <button onClick={() => setOpenModal(true)} className="reactjs">
        React JS
      </button>
      {openModal && 
        <Modal 
          setOpenModal={setOpenModal} 
          title="Minha Experiencia com React JS"
          content="Minha jornada começou..."
          icon={<FaReact />}
        />
      }
      
      <button className="exp-prof">Experiencia Profissional</button>

      <button className="hobbies">Hobbies</button>
    </Container>
  );
}
