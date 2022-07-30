import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
   
    :root{
        
        --title-color: #D4CCB6;
        --body-color: rgba(175, 182, 194, 1);
        --text-forgot-color:#FFC632;
        --text-button-logIn: #473404;

        --shape-color: rgba(36, 34, 31, 1);
        --color_background_app: #000000;

        --background-button-color: rgba(255, 198, 50, 1);

        --font-principal-W600:'Poppins', sans-serif;
        --font-principal-W500:'Poppins', sans-serif;

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
        background: var( --color-background-app);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }
`;