import { useNavigate } from "react-router-dom";
import { Container } from "./header";

interface Props {
    title: string;
    subTitle?: string;
    showBackHomeButton?: boolean;
}

export function Header ({ title, subTitle, showBackHomeButton }: Props) {
    const router = useNavigate()

     return (
        <Container>
            <h1>{title}</h1>

            <p>{subTitle}</p>

            {showBackHomeButton && (
                <button className="back-button" onClick={() => router('/')}>
                    Voltar
                </button>
            )}
        </Container>
     )
}