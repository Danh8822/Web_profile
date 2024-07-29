import React, { useRef } from 'react';
import './Projects.css'
import { PROJECTS} from '../../utils/data';
import Slider from 'react-slick';
import { AiOutlineRight,AiOutlineLeft  } from "react-icons/ai";
import ProjectsCard from './ProjectsCard/ProjectsCard';

const Projects = () => {

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite:true,
        speed:500,
        slidesToShow: 2,
        slidesToScroll:1,
        arrows : false,
        responsive: [
            {
                breakpoint:769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }
    
    return ( 
        <section className='project-container'>
        <h5>Project</h5>

        <div className='project-content'>

            <div className='arrow-right' onClick={slideRight}>
                <span><AiOutlineRight /></span>
            </div>

            <div className='arrow-left' onClick={slideLeft}>
                <span ><AiOutlineLeft /></span>
            </div>

            <Slider ref={sliderRef} {...settings}>
              {PROJECTS.map((item) => (
                <ProjectsCard
                   key={item.title}
                   details={item}
                />
              ))}
              </Slider>
        </div>

    </section>
 );
}
 
export default Projects;