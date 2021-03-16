import React  from 'react';
import home1 from './../img/home1.png';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Wave from './Wave';

const AboutStyled = styled(motion.div)`
    display: flex;    

    justify-content: center;
    align-items: center;
    min-height: 90vh;
    padding: 1rem 2rem;

    @media only screen and (max-width: 600px) {
        flex-wrap: wrap;
    }
`;

const TitleStyled = styled.div`
    position: relative;
    z-index: 2;
    padding: 1rem;
    & p {
        font-size: 1.4rem;
        padding: 2rem 0;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const ImgStyled = styled.div`    
    overflow: hidden;     
`;

const Img = styled(motion.img)`
    position: relative;
    z-index: 2;
    width: 80%;
    object-fit: contain;
`;

const animateTitle = {
    hidden: {  y: 200  },
    show: { 
        y : 0,
        transition:{ duration: 0.75, ease: 'easeOut'}
    }    
}

const animateText = {
    hidden: {opacity: 0},
    show: { opacity: 1, transition:{ duration: 0.75}},
}

const animtaImg = {
    hidden : {scale: 2.5, opacity : 0},
    show : {
        scale: 1, 
        opacity : 1,
        transition: {duration: 0.75}
    },
}

const About = () => {
    return ( 
        <AboutStyled className="description">
            <Wave></Wave>
            <TitleStyled className="title">            
                    <Hide>
                        <motion.h2 
                            variants={animateTitle}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 
                            variants={animateTitle}>your <span>dreams</span> dreams come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 
                            variants={animateTitle}>true</motion.h2>
                    </Hide>
                <motion.p
                    variants={animateText}>Contac us for ideas you have </motion.p>
                <motion.button variants={animateText}>Contact</motion.button>
            </TitleStyled>             
            <ImgStyled>
                <Img variants={animtaImg} src={home1} alt="Laptop on table."/>    
            </ImgStyled>             
        </AboutStyled>
    );
}
 
export default About;