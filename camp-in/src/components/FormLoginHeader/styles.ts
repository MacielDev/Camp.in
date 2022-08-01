import styled from "styled-components";

export const Container = styled.div`
   div{
    align-items: center;
    display:flex;
    flex-direction: row;
   }
   img{
    margin:0;
    padding:0rem;
   }
   h1{
    color: var(--title-color);
    font-family:var(--font-principal-W600);
    font-weight:600;
    font-size:1.6rem;
    line-height:2.4rem;
   }

   h3{
    color:var(--body-color);
    font-family:var(--font-secundaria-W500);
    font-weight:500;
    font-size:1.06rem;
    line-height: 1.6rem;
   }

`;