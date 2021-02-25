import React, { useRef } from 'react';
import styled from 'styled-components';


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
    }

    a::after{
        left: 0;
        content: '';
        display : block;
        position: absolute;
        background-image: linear-gradient(to right, #097679 , #00d4ff);
        color: blue;
        width: 0%;
        height: 0.2rem;
        transition: all 0.2s cubic-bezier(.65, -0.3, .5, 1.25);
    }

    a.active{
        &::after{       
            width: 110%;
        }

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
                <li><a href="#" onClick={(e) => toggleMenuActive(e)} className='active'>HTML</a> </li>
                <li><a href="#" onClick={(e) => toggleMenuActive(e)} >CSS</a> </li>
                <li><a href="#" onClick={(e) => toggleMenuActive(e)} >JavaScript</a> </li>
                <li><a href="#" onClick={(e) => toggleMenuActive(e)} >Python</a></li>
            </ul>     
        </NavStyled>
     );
}
 
export default Nav;