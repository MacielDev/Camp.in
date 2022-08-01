import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    margin-top: 1rem;
    a{
        font-family:var(--font-principal-W500);
        font-size: 0.93rem;
        line-height:1.4rem;
        color:var(--body-color);
        text-decoration:none;
        font-weight: 300;
        &:hover{
            color:var(--yellow-destaque);
        }
        strong{
            font-family:var(--font-principal-W600);
            font-weight: 600;
        }
    }
`;