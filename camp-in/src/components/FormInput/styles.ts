import styled from "styled-components";

export const Container = styled.div`

    display:flex;
    flex-direction:column;
    color:var(--body-color);
    line-height:1.6rem;
    

    label{
        font-family:var(--font-principal-W500);
        font-size:1.06rem;
        margin: 2.3rem 0 0.2rem 0;
        
       }
    input{
        all: unset;
        width:22.33rem;
        height:2.93rem;
        border-radius:0.26rem;
        font-family:var(--font-secundaria-W400);
        font-size:0.93rem;
        padding-left:0.5rem;
        background-color:var(--shape-color);
        border: 1px solid var(--body-color);
        box-sizing: border-box;
    }
       
    input:focus{
        outline:none;
      
        border: 1px solid var(--yellow-destaque);
        box-shadow:0px 0px 0px 2px #FFDE88;
    }
    
`;