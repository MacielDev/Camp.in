import styled from "styled-components";

export const Container = styled.header`
   div{
        display:flex;
        align-items: center;
   }
   img{
    padding:0rem;
    margin:0;
   }
   h1{
       font-family:var(--font-principal-W600);
       color: var(--title-color);
       font-size:1.6rem;
       line-height:2.4rem;
   }
   
   p{
       font-family:var(--font-secundaria-W500);
       color:var(--body-color);
       font-size:1.06rem;
       line-height: 1.6rem;
   }
   
`;