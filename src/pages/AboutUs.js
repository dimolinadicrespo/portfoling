import React, { Fragment } from 'react';
import Faq from '../components/Faq';
import About from './../components/About';
import Services from './../components/Services';
import {pageTransition} from './../animations/animations.js';
import {motion} from 'framer-motion';

const AboutUs = () => {
    return (
        <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="show"
            exit="exit">            
            <About></About>
            <Services></Services>
            <Faq></Faq>
        </motion.div>
    );
}
 
export default AboutUs;