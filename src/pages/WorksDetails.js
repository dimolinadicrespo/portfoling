import React, { Fragment } from 'react';
import WorkDetail from './../components/WorkDetail';
import {pageTransition} from './../animations/animations.js';
import {motion} from 'framer-motion';

const WorksDetails = () => {
    return (
        <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="show"
            exit="exit">            
            <WorkDetail></WorkDetail>
        </motion.div>
    );
}
 
export default WorksDetails;