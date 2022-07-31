import { Container } from "./styles";

export function DoubleLink(){
    return(
        <Container>
                <input id="lembraSenha" type="checkbox"/>  
                <label htmlFor="lembraSenha">Lembre-me</label>
                <a href="www.google.br">Esqueci minha senha</a>
        </Container>
    );
}