import { FormInput } from "../FormInput";
import { FormLoginHeader } from "../FormLoginHeader";
import { Container } from "./styles";

export function FormLogin(){
    return (
        <Container>
            <FormLoginHeader/>
            <FormInput label ="E-mail" placeholder="Digite seu e-mail"/>
            <FormInput label ="Senha" placeholder="Digite sua senha"/>
        </Container>
    );
}
