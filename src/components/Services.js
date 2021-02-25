import React from 'react';
import laptop from './../img/laptop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMoneyBill, faUsers, faArchive   } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ServicesStyled = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;  
    padding: 2rem;    
    @media only screen and (max-width: 600px) {
        flex-wrap: wrap;
    }
`;

const ServicesImage = styled.div`
    display: flex;
    overflow: hidden;
`;

const Img = styled.img`
    width: 90%;
    object-fit: contain;
`;

const ServicesDesc = styled.div`
    padding: 1rem;
`;

const CardsStyled = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
`;

const CardStyled = styled.div`
    padding: 1rem;
`;

const IconStyled = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    & h3{
        padding-left: 0.5rem;
    }
`;

const Services = () => {
    return (
        <ServicesStyled>   
            <ServicesDesc>
                <div className="title">
                    <h2>High <span>quality</span> service</h2>
                </div>          
                <CardsStyled>
                    <CardStyled>
                        <IconStyled>
                            <FontAwesomeIcon icon={faClock} />
                            <h3>Efficiency</h3>
                        </IconStyled>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </CardStyled>                                
                    <CardStyled>
                        <IconStyled>
                            <FontAwesomeIcon icon={faMoneyBill} />
                            <h3>Affordable</h3>
                        </IconStyled>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </CardStyled>                                
                    <CardStyled>
                        <IconStyled>
                            <FontAwesomeIcon icon={faUsers} />
                            <h3>Work Group</h3>
                        </IconStyled>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </CardStyled>                                
                    <CardStyled>
                        <IconStyled>
                            <FontAwesomeIcon icon={faArchive} />
                            <h3>Security</h3>
                        </IconStyled>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </CardStyled>                                
                </CardsStyled>
            </ServicesDesc>
            <ServicesImage>
                <Img src={laptop} alt="Laptop on table."/>    
            </ServicesImage> 
        </ServicesStyled>
    );
}
 
export default Services;