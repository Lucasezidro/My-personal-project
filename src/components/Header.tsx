import { useNavigate } from "react-router-dom";
import { Container } from "./header";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu } from "./Menu";

interface Props {
  title: string;
  subTitle?: string;
  showBackHomeButton?: boolean;
  showModalMenu?: boolean
}

export function Header({
  title,
  subTitle,
  showBackHomeButton,
  showModalMenu
}: Props) {
  const router = useNavigate();

  return (
    <Container>
      <h1>{title}</h1>

      <p>{subTitle}</p>

      {showBackHomeButton && (
        <button className="back-button" onClick={() => router("/")}>
          Voltar
        </button>
      )}
    </Container>
  );
}
