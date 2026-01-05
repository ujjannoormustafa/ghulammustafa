import React, {Fragment} from 'react';
import About from '../components/about/about';
import BlogSection from '../components/BlogSection/BlogSection';
import CommonHead from '../components/commonHead';
import ContactArea from '../components/ContactArea';
import ExprienceSec from '../components/Exprience/Exprience';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/hero';
import GitHubContributions from '../components/GitHubCalendar';
import Navbar from '../components/Navbar/Navbar';
import Pricing from '../components/Pricing/Pricing';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import Testimonial from '../components/Testimonial/Testimonial';
import Header from '../components/header/Header';
import WhatsAppFloat from '../components/WhatsAppFloat/WhatsAppFloat';
import Home2 from './home2';
const HomePage = () => {
    return (
        <Fragment>
            {/* <CommonHead/>
            <Header/>
            <Hero/>
            <About/>
            <ServiceSection/>
            <ExprienceSec/>
            <GitHubContributions/>
            <ProjectSection/>
            <Testimonial/>
            <ContactArea/>
            <Footer/>
            <Scrollbar/> */}
            <Home2 />
            <WhatsAppFloat/>
        </Fragment>
    )
}

export default HomePage;
