import { Container } from "./styles";
import Log_inImg from '../../assets/log-in.svg';
export function FormLoginHeader(){
    return(
        <Container>
            <div>
                <img src={Log_inImg} alt="Logo"/>
                <h1>Faça Seu Login</h1> 
            </div>
            <h3>Entre com suas informações de cadastro.</h3>
        </Container>
    );
}