import React, { Fragment } from 'react';
import Faq from '../components/Faq';
import About from './../components/About';
import Services from './../components/Services';

const AboutUs = () => {
    return (
        <Fragment>            
            <About></About>
            <Services></Services>
            <Faq></Faq>
        </Fragment>
    );
}
 
export default AboutUs;