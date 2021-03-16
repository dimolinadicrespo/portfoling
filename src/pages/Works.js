import React, { Fragment } from 'react';
import OurWork from './../components/OurWork';
import {pageTransition} from './../animations/animations.js';
import {motion} from 'framer-motion';
import {getRandomColor} from './../helpers.js';

const Works = () => {
    return (
        <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{background: '#709fb0'}}>           
            <OurWork></OurWork>
        </motion.div>
    );
}
 
export default Works;