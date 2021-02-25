import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #344759;      
        font-family: 'Poppins', sans-serif;
    }
    
    button{
        font-size: 1.1rem;
        padding: 0.5rem;
        border-radius: 0.2rem;
        background: none;
        width: 200px;
        border: 2px solid #419F94;
        transition: all ease 0.1s;
        color: white;
        
        &:hover{
            cursor: pointer;
            background-color: #419F94;
            color: white;
            border: 2px solid white;
        }
    }

    h2{
        font-size: 4rem;
        font-weight: bolder;
        & > span{
            color: #419F94;
        }
        color: white;
    }

    p{
        font-weight: lighter;
        color: #b7b7b7;
    }

    a{
        text-decoration: none;  
        color: white;      
    }
    a:visited{
        color: white;
    }
`;


export default GlobalStyle;