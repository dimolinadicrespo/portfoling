import React from "react";
import styled from 'styled-components';

const FaqStyled = styled.div`
    padding: 1rem 2rem;

    .line{
        width: 100%;
        height: 1px;
        background-color: white;
        margin: 1rem 0rem;
    }
    h4{
        padding: 1rem 0rem;
    }
`;

const Faq = () => {
    return (
        <FaqStyled className="faq">
            <div className="faq-title">
                <h2>Any question? <span>FAQ</span></h2>                
            </div>
            <div className="question">
                <h4>Questión 1</h4>                
                <div className="answer">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatibus accusantium non nostrum similique illum perferendis deleniti voluptates assumenda natus voluptatum quasi, perspiciatis vitae. Minima et eaque ad delectus quas.</p>
                </div>
                <div className="line"></div>
            </div>            
            <div className="question">
                <h4>Questión 2</h4>                
                <div className="answer">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatibus accusantium non nostrum similique illum perferendis deleniti voluptates assumenda natus voluptatum quasi, perspiciatis vitae. Minima et eaque ad delectus quas.</p>
                </div>
                <div className="line"></div>
            </div>            
            <div className="question">
                <h4>Questión 3</h4>                
                <div className="answer">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatibus accusantium non nostrum similique illum perferendis deleniti voluptates assumenda natus voluptatum quasi, perspiciatis vitae. Minima et eaque ad delectus quas.</p>
                </div>
                <div className="line"></div>
            </div>           
        </FaqStyled>
    );
};

export default Faq;
