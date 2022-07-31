import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top:1rem;
    
    label{
        font-family: var(--font-secundaria-W400);
        font-size:1.06rem;
        line-height:1.26rem;
        color:var(--body-color);
        margin-left:-4.5rem;
        &:hover{
            color:var(--yellow-destaque);
        }
    }
    input{
        all: unset;
        background-color:var(--shape-color);
        width:1.33rem;
        height:1.33rem;
        border: 1px solid var(--body-color);
        border-radius:0.26rem;
        text-shadow
       &:hover{
            border: 1px solid var(--yellow-destaque);
       }
        &:checked{
            border: 1px solid var(--yellow-destaque);
        }
    }
    a{
        font-family:var(--font-principal-W600);
        font-size:0.93rem;
        line-height:1.4rem; 
        text-decoration:none;
        color:var(--body-color);
        &:hover{
            color:var(--yellow-destaque);
        }
    }
`;