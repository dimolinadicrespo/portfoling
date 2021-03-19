import React from "react";
import styled from 'styled-components';
import Question from './Question';
import { motion, AnimateSharedLayout } from "framer-motion";
import {FadeInWhenVisible} from './../hooks/useVisible';

const FaqStyled = styled.div`
    padding: 1rem 2rem;

    .line{
        width: 100%;
        height: 1px;
        background-color: white;
        margin: 2rem 0rem;
    }
    h4{
        padding: 1rem 0rem;
    }
    p{
        line-height: 2.5;
    }
`;

const Faq = () => {
    return (
        <FadeInWhenVisible>
            <FaqStyled className="faq">
                <div className="faq-title">
                    <h2>Any question? <span>FAQ</span></h2>                
                </div>
                <AnimateSharedLayout>
                    <Question title={'Question 1'}></Question>            
                    <Question title={'Question 2'}></Question>            
                    <Question title={'Question 3'}></Question>                             
                </AnimateSharedLayout>
            </FaqStyled>
        </FadeInWhenVisible>
    );
};

export default Faq;
