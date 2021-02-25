import React, { Fragment } from 'react';
import Faq from '../components/Faq';
import About from './../components/About';
import Services from './../components/Services';
import Nav from './../components/Nav';

const AboutUs = () => {
    return (
        <Fragment>
            <Nav></Nav>
            <About></About>
            <Services></Services>
            <Faq></Faq>
        </Fragment>
    );
}
 
export default AboutUs;