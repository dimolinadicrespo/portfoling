import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const QuestionHeader = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;

const Question = ({title}) => {
    const [display, setDisplay] = useState(false);
    return (
        <motion.div onClick={() => setDisplay(!display)} layout className="question">
            <QuestionHeader layout className="question-header">
                <motion.h4>{ title }</motion.h4>
                <FontAwesomeIcon icon={display ? faMinus : faPlus} />
            </QuestionHeader>            
            {
                display 
                ?                
                <motion.div className="answer">
                    <motion.p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Optio voluptatibus accusantium non nostrum similique illum
                        perferendis deleniti voluptates assumenda natus voluptatum
                        quasi, perspiciatis vitae. Minima et eaque ad delectus quas.
                    </motion.p>
                </motion.div>
                :
                null
            }
            <div className="line"></div>
        </motion.div>
    );
};

export default Question;
