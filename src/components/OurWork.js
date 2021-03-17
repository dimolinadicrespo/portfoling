import React, { PureComponent, useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import bitcoin from './../img/bitcoin.png';
import running from './../img/running.png';
import athleteSmall from './../img/athlete-small.png';
import { MovieState } from './../movieState';
import {motion, useAnimation} from 'framer-motion';
import {Hide} from './../styled/styled.js';
import { useInView } from "react-intersection-observer";

const WorkStyled = styled.div`
    min-height: 90vh;
`;

const Movie = styled.div`
    padding: 2rem;
    overflow: hidden;
    img{
        width:100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Line = styled(motion.div)`
    padding: 0.2rem;
    background-image: linear-gradient(to right, #097679 , #00d4ff);
    margin-bottom: 2rem;
    width:100%;
`;


const animateText = {
    hidden : {opacity: 0},
    show: { 
        opacity: 1 ,
        transition: {duration: 0.3}
    },
}
const animateLine = {
    hidden : {opacity: 0, x : '-100%' },
    show: { 
        opacity: 1 ,
        x :0, 
        transition: {duration: 0.3}
    },
}
const animateImg = {
    hidden : {opacity: 0, scale: 1.5},
    show: { 
        opacity: 1 ,
        scale: 1,
        transition: { duration: 0.75}
    },
}

const Frame1 = styled(motion.div)`
    position: fixed;    
    width: 100%;
    left: 0;
    height: 100vh;
    background-color: #ff75a0;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background-color: #fce38a;
`;
const Frame3 = styled(Frame1)`
    background-color: #eaffd0;
`;
const Frame4 = styled(Frame1)`
    background-color: #95e1d3;
`;

const FrameAnim = {
    hidden: {x: '-200%', skew: '45deg'},
    show: {
        x: '200%', 
        skew: '0deg',
        transition: {duration: 2, ease: 'easeOut'}
    }    
}
const FrameContainerAnim = {
    hidden: {opacity: 1},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.2, duration: 0.5, ease: 'easeOut'},            
    }    
}

const OurWork = () => {
    
    const [movies, setMovies] = useState(MovieState);
   
    return ( 
        <WorkStyled>
            <motion.div variants={FrameContainerAnim}>
                <Frame1 variants={FrameAnim}></Frame1>
                <Frame2 variants={FrameAnim}></Frame2>
                <Frame3 variants={FrameAnim}></Frame3>
                <Frame4 variants={FrameAnim}></Frame4>
            </motion.div>
            {
                movies.map((item, index) => 
                    <Movie key={index}>
                        <motion.h2
                            variants={animateText}>{item.title}</motion.h2>
                        <Hide>
                            <Line variants={animateLine}/>
                        </Hide>                        
                        <Link to={item.url}>
                            <motion.img variants={animateImg} src={item.mainImg} alt={item.title}/>
                        </Link>
                    </Movie>
                )
            }
        </WorkStyled>        
     );
}
 
export default OurWork;