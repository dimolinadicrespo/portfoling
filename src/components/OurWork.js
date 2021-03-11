import React, { PureComponent, useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import bitcoin from './../img/bitcoin.png';
import running from './../img/running.png';
import athleteSmall from './../img/athlete-small.png';
import { MovieState } from './../movieState';

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

const Line = styled.div`
    padding: 0.2rem;
    background-color: white;
    margin-bottom: 2rem;
    width:100%;
`;

const OurWork = () => {
    
    const [movies, setMovies] = useState(MovieState);

    console.log(movies);

    return ( 
        <WorkStyled>
            {
                movies.map((item, index) => 
                    <Movie key={index}>
                        <h2>{item.title}</h2>
                        <Line/>
                        <Link to={item.url}>
                            <img src={item.mainImg} alt={item.title}/>
                        </Link>
                    </Movie>
                )
            }
        </WorkStyled>
     );
}
 
export default OurWork;