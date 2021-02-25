import React  from 'react';
import homewebp from './../img/homewebp.webp';
import styled from 'styled-components';

const AboutStyled = styled.div`
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
    padding: 1rem;
    & p {
        font-size: 1.4rem;
        padding: 2rem 0;
    }
`;

const ImgStyled = styled.div`    
    overflow: hidden;     
`;

const Img = styled.img`
    width: 80%;
    object-fit: contain;
`;

const About = () => {
    return ( 
        <AboutStyled className="description">
            <TitleStyled className="title">
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>your <span>dreams</span> dreams come</h2>
                </div>
                <div className="hide">
                    <h2>true</h2>
                </div>
                <p>Contac us for ideas you have </p>
                <button>Contact</button>
            </TitleStyled>             
            <ImgStyled className="image">
                <Img src={homewebp} alt="Laptop on table."/>    
            </ImgStyled>           
        </AboutStyled>
    );
}
 
export default About;