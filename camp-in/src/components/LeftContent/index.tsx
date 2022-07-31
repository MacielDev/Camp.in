
import { FormLogin } from "../FormLogin";
import { Container } from "./styles";

import LogoImg from "../../assets/logo.svg";

export function LeftContent(){
    return (
        <Container>
           <header>
                <img src={LogoImg} alt="logo Camp-in" />
           </header>	
           <main>
                <FormLogin/>
           </main>
        </Container>
    );
}