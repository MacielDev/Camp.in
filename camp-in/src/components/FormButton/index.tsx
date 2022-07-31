import { Container } from "./style";

interface buttonName{
    buttonName:string;
}
export function FormButton(props:buttonName){
    return(
        <Container>
            <button type="button">{props.buttonName}</button> 
        </Container>
    );
}