import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { Container } from "./styles";
import * as Avatar from '@radix-ui/react-avatar';
import { BsLinkedin, BsGithub, BsFacebook, BsYoutube } from "react-icons/bs"

export function MyPage () {
    return (
        <Container>
            <Header 
                title="Lucas Ezidro" 
                subTitle="Um pouco sobre minha carreira profissional!"  
                showModalMenu
            />
            <Avatar.Root>
                <Avatar.Image 
                    className="img-profile"
                    src="https://lh3.googleusercontent.com/a/AEdFTp42TTSFjr7Ucqk_t0EvTYxIm1Fg09zMMXtmluilGw=s288-p-rw-no" 
                    alt="Lucas Ezidro"
                />
                <Avatar.Fallback delayMs={600}>LE</Avatar.Fallback>
            </Avatar.Root>

            <div className="social-media">
                <h1>Lucas Ezidro</h1>
                <h3>Desenvolvedor FullStack</h3>

                <div className="links">
                    <a href="https://www.linkedin.com/in/lucasezidro/" className="linkedin" target="_blank">
                        <BsLinkedin />
                    </a>
                    
                    <a href="https://github.com/Lucasezidro" className="github" target="_blank">
                        <BsGithub />
                    </a>
                    <a href="https://www.youtube.com/@yellowtechnology1939/playlists" className="youtube" target="_blank">
                        <BsYoutube />
                    </a>
                    <a href="https://www.facebook.com/lucasezidro" className="facebook" target="_blank">
                        <BsFacebook />
                    </a>

                </div>
            </div>

            <Menu />
        </Container>
    )
}
