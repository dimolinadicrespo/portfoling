import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { MovieState } from './../movieState';
import { MovieContext }  from './../hooks/movieContext';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {FadeInWhenVisible} from './../hooks/useVisible';


const WorkStyled = styled(motion.div)`
    min-height: 90vh;
`;

const Movie = styled(motion.div)`
    overflow: hidden;    
    img{
        position: relative;
        width:100%;        
        object-fit: cover;
    }
    h3{
        color: white;
    }
    padding-bottom: 3rem;
`;

const MovieHead = styled(motion.div)`
    padding:  2rem 2rem;
    text-align: center;
`;

const Awards = styled.div`
    padding:  2rem;    
`;

const AwardsContainer  = styled.div`
    display: flex;
    justify-content: center;
    padding: 5rem 2rem;    
`;

const AwardStyled = styled.div`
    padding:  0 2rem;
`;

const Line = styled(motion.div)`
    padding: 0.06rem;
    background-color: white;
    margin: 1rem 0;
    width:100%;
`;

const Frame1 = styled(motion.div)`
    position: fixed;    
    width: 100vw;
    top: 10%
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
const Frame5 = styled(Frame1)`
    background-color: #95e1d3;
`;

const FrameAnim = {
    hidden: {x: '150%', skew: '45deg'},
    show: {
        x: '-200%', 
        skew: '0deg',
        transition: {duration: 2, ease: 'easeOut'}
    }    
}

const FrameContainerAnim = {
    hidden: {opacity: 1},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.2, duration: 0.75, ease: 'easeOut'},            
    }    
}

const animateText = {
    hidden : {opacity: 0},
    show: { 
        opacity: 1 ,       
    },
}
const animateLine = {
    hidden : {opacity: 0, x :  '100%'},
    show: { 
        opacity: 1 ,
        x :0,         
    },
}
const animateImg = {
    hidden : {opacity: 0, scale: 1.5 },
    show: { 
        opacity: 1 ,                
        scale: 1,
        transition: { duration: 0.75}
    },
}
const workStyledAnim = {
    hidden : {opacity: 1},
    show: { 
        opacity: 1 ,
        transition: { staggerChildren: 0.5, duration: 3}
    },
}

const WorkDetail = () => {
    
    const history = useHistory();

    const [movies, setMovies] = useState(MovieState);
    
    const url = history.location.pathname;

    const { movie, setMovie } = useContext(MovieContext);
    
    useEffect(() => {
        setMovie(movies.filter(movieItem => movieItem.url === url)[0]);
        console.log(movie);
    }, [url, movies]);
       
    return ( 
        <>
        <WorkStyled variants={workStyledAnim}> 
            <motion.div variants={FrameContainerAnim}>
                <Frame1 variants={FrameAnim}></Frame1>
                <Frame2 variants={FrameAnim}></Frame2>
                <Frame3 variants={FrameAnim}></Frame3>
                <Frame4 variants={FrameAnim}></Frame4>
                <Frame5 variants={FrameAnim}></Frame5>
            </motion.div>   
            <MovieHead><motion.h2 variants={animateText}>Details</motion.h2></MovieHead>        
            {movie && movie.awards &&
            (        
                <Movie>
                    <MovieHead>
                        <motion.h3 variants={animateText}>{movie.title}</motion.h3>
                        <Line variants={animateLine}></Line>
                    </MovieHead>                
                    <motion.img variants={animateImg} src={movie.mainImg} alt=""/>                
                    <Awards>                                           
                        <FadeInWhenVisible>
                            <h3>Awards</h3>
                            <AwardsContainer>
                                {
                                    movie.awards.map((item, key) => (
                                        <Award 
                                            key={key}
                                            title={item.title}
                                            description={item.description}></Award>
                                ))}
                            </AwardsContainer>
                        </FadeInWhenVisible>                                        
                    </Awards>
                    <FadeInWhenVisible variants={{show: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 1.5 }}}>
                        <motion.img variants={animateImg} src={movie.secondaryImg} alt={movie.title}/>              
                    </FadeInWhenVisible> 
                </Movie>            
            )}
        </WorkStyled>
        </>
    );
}

const Award = ({title, description}) => {
    return (
        <AwardStyled>
            <h4>{title}</h4>
            <Line></Line>
            <p>{description}</p>
        </AwardStyled>
    );
}

 
export default WorkDetail;