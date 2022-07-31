import { Container } from "./styled";
import SideImg from '../../assets/side-image.jpg';

export function RightContent(){
    return(
        <Container>
            <img src={SideImg} alt="banner acampamento"/>
        </Container>
    );
}