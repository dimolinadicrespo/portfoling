import React, { useState, useContext, useEffect } from 'react'
import {useHistory} from 'react-router-dom';
import { MovieState } from './../movieState';
import  { MovieContext }  from './../hooks/movieContext';
import styled from 'styled-components';

const WorkStyled = styled.div`
    min-height: 90vh;
`;

const Movie = styled.div`
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

const MovieHead = styled.div`
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

const Line = styled.div`
    padding: 0.06rem;
    background-color: white;
    margin: 1rem 0;
    width:100%;
`;

const WorkDetail = () => {
    
    const history = useHistory();

    const [movies, setMovies] = useState(MovieState);
    
    const url = history.location.pathname;

    const { movie, setMovie } = useContext(MovieContext);
    
    useEffect(() => {
        setMovie(movies.filter(movieItem => movieItem.url === url)[0]);
    }, [url, movies]);
    
    console.log(movie);

    return ( 
        <>
        {movie.awards &&
        (<WorkStyled>
            <Movie>
                <MovieHead>
                    <h2>{movie.title}</h2>
                    <Line></Line>
                </MovieHead>                
                <img src={movie.mainImg} alt=""/>                
                <Awards>                   
                    <h3>Awards</h3>
                    <AwardsContainer>
                        {
                        movie.awards.map((item) => (
                            <Award 
                                title={item.title}
                                description={item.description}></Award>
                        ))}
                    </AwardsContainer>                    
                </Awards> 
                <img src={movie.secondaryImg} alt=""/>              
            </Movie>            
        </WorkStyled>)}
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