import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
   
    :root{
        
        --title-color: rgba(212, 204, 182, 1);
        --body-color: rgba(175, 182, 194, 1);
        --yellow-destaque:#FFC632;
        --text-button-logIn: #473404;

        --shape-color: rgba(36, 34, 31, 1);
        --color_background_app: #000000;

      

        --font-principal-W600:'Poppins', sans-serif;
        --font-principal-W500:'Poppins', sans-serif;
        --font-principal-W300:'Poppins', sans-serif;

        --font-secundaria-W500:'Roboto', sans-serif;
        --font-secundaria-W400:'Roboto', sans-serif;

        
    }

  
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    
    html{
        @media(max-width:1080px){ //15px
            font-size: 93.75%;
        }
        @media(max-width:720px){ //14px
            font-size:87.5%;
        }
        
    }   

    body{
        background-color: var(--color_background_app);
        -webkit-font-smoothing: antialiased;
        .textoTeste{color:#fff;}
        
    }
    .container{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
    }
    button{
        cursor: pointer;
    }
   
    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }
`;