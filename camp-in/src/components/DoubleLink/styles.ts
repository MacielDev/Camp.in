import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display:flex;
    justify-content: space-between;
    margin-top:1rem;
    
    label{
        color:var(--body-color);
        font-family: var(--font-secundaria-W400);
        font-weight:400;
        font-size:1.06rem;
        line-height:1.26rem;
        margin-left:-4.5rem;
        &:hover{
            color:var(--yellow-destaque);
        }
    }
    input{
        all: unset;
        background-color:var(--shape-color);
        border: 1px solid var(--body-color);
        border-radius:0.26rem;
        height:1.33rem;
        width:1.33rem;
        text-shadow
       &:hover{
            border: 1px solid var(--yellow-destaque);
       }
        &:checked{
            border: 1px solid var(--yellow-destaque);
        }
    }
    a{
        color:var(--body-color);
        font-family:var(--font-principal-W600);
        font-weight: 600;
        font-size:0.93rem;
        line-height:1.4rem; 
        text-decoration:none;
        &:hover{
            color:var(--yellow-destaque);
        }
    }
`;