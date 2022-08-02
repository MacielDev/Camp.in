import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    width:22.33rem;
    button{ 
        background-color:var(--yellow-destaque);
        border:none;
        border-radius:0.27rem;
        color:var(--shape-color);
        font-family:var(--font-principal-W600);
        font-size:1.2rem;
        height: 100%;
        line-height:1.8rem;
        margin-top: 1rem;
        padding:0.8rem 1.6rem;
        text-transform:uppercase;
        width: 100%;

        transition:filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;