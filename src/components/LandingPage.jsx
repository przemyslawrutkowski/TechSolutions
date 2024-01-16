// LandingPage.js
import React from 'react';
import { Element } from 'react-scroll';
import HomePage from './HomePage';
import WhyUsPage from './WhyUsPage';
import AboutUsPage from './AboutUsPage';
import ServicesPage from './ServicesPage';
import TestimonialsPage from './TestimonialsPage';

const LandingPage = () => {
    return (
        <>
            <Element name="home">
                <HomePage />
            </Element>
            <Element name="whyUs">
                <WhyUsPage />
            </Element>
            <Element name="about">
                <AboutUsPage />
            </Element>
            <Element name="services">
                <ServicesPage />
            </Element>
            <Element name="testimonials">
                <TestimonialsPage />
            </Element>
        </>
    );
};

export default LandingPage;
