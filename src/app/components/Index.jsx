'use client';

import { useEffect, useState } from 'react';
import { skillsData, experienceData, projectsData, educationData } from '../data';
import Link from 'next/link';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import './style.css';
import sliderImg from '../assets/images/slider.jpg'
import Image from 'next/image';
import Contact from './Contact';

const Index = () => {


    return (
        <>


            <About />
            <Skills data={skillsData} />
            <Experience data={experienceData} />
            <Projects data={projectsData} />
            <Education data={educationData} />
            <Contact />

            


        </>
    );
}

export default Index;
