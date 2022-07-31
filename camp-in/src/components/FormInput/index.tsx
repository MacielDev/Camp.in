import { Container } from "./styles";


interface parametrosInput{
    label:string;
    placeholder:string;
}
export function FormInput(props: parametrosInput){
     
    return(
        <Container>
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </Container>
    );
}