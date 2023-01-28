import { Form } from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import { CreateUser } from "../CreateUser/CreateUser";
import { Container } from "./styles";

export function Home () {

    return (
        <Container>
            <Header 
                title="Olá, me chamo Lucas Ezidro" 
                subTitle="Faça seu login para conhecer mais sobre meu curriculum" 
            />
            <Form />
        </Container>
    )
}
