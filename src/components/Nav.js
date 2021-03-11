import React, { useRef } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const NavStyled = styled.nav`
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2rem;   
    background-color: #40586f;
    
    h1 {
        color: white;
        font-weight: lighter;
        letter-spacing:0.5rem;
        font-family: 'Reggae One', cursive;
    }
    
    ul{
        text-decoration: none;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    a{
        margin: 0 2rem;
        position:relative;       
        letter-spacing: 0.5rem; 
        z-index: 3;
    }

    a::before {  
        transform: scaleX(0);
        transform-origin: bottom right;
    }

    a.active::before {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    a::before {
        content: " ";
        display: block;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        inset: 0 0 0 0;
        background-image: linear-gradient(to right, #097679 , #00d4ff);
        z-index: -1;
        transition: transform .3s cubic-bezier(.65, -0.3, .5, 1.25);
    }

    a {
        position: relative;        
        color: white;
    }
`;

const Nav = () => {

    const ulRef = useRef(null);

    const toggleMenuActive = (e) => {        
        ulRef.current.childNodes.forEach(item => item.firstChild.classList.remove('active'));
        e.target.classList.add('active');
    }

    return ( 
        <NavStyled>
            <h1>Logotype</h1>
            <ul ref={ulRef}>
                <li><Link to="/" onClick={(e) => toggleMenuActive(e)}>About Us</Link> </li>
                <li><Link to="/work" onClick={(e) => toggleMenuActive(e)} >Our Work</Link> </li>
                <li><Link to="/contact" onClick={(e) => toggleMenuActive(e)} >Contact</Link> </li>                
            </ul>     
        </NavStyled>
     );
}
 
export default Nav;