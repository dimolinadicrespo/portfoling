import React, { Fragment } from 'react';
import Nav from './../components/Nav';
import {pageTransition} from './../animations/animations.js';
import {motion} from 'framer-motion';

const ContacUs = () => {
    return (
        <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="show"
            exit="exit">       
            <h2>Contact </h2>
            <h3>Contact Us</h3>
        </motion.div>
    );
}
 
export default ContacUs;