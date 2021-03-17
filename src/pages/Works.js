import React from 'react';
import OurWork from './../components/OurWork';
import {pageTransition} from './../animations/animations.js';
import {motion} from 'framer-motion';

const Works = () => {
    return (
        <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="show"
            exit="exit">           
            <OurWork></OurWork>
        </motion.div>
    );
}
 
export default Works;