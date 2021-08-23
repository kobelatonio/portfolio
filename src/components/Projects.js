import Project from "./Project"
import FadeInWhenVisible from "./FadeInWhenVisible"

// LOGOS
import CHEDLogo from '../media/logos/ched.svg';
import TheNorthernLogo from '../media/logos/northern.svg';
import PersephoneCafeLogo from '../media/logos/persephone.svg';
import FilinventionsLogo from '../media/logos/filinventions.svg';
import FoodCartelLogo from '../media/logos/foodcartel.svg';
import QuintasLogo from '../media/logos/quintas.svg';
import NinnaLogo from '../media/logos/ninna.svg';

const projects = [
    {
        category: 'Web',
        list: [
            {
                title: 'CHED-CAR Scholarship',
                description: 'A comprehensive web system that automates the tasks of applicants, scholars, scholarship coordinators, and administrators.',
                logo: CHEDLogo,
                isLogoSVG: true,
                background: '#0952c6',
                page: 'CHED',
                hasUrl: false,
                url: null
            },
            {
                title: 'Persephone Cafe',
                description: 'A personal project for Persephone Cafe to promote their brand and provide easy access to their menu and career openings.',
                logo: PersephoneCafeLogo,
                isLogoSVG: true,
                background: '#7f0099',
                page: 'Persephone',
                hasUrl: true,
                url: 'https://kobelatonio.github.io/persephonecafe/'
            },
            {
                title: 'The Northern',
                description: 'A showcase website for The Northen — a brand envisioned and inspired by Scandinavian furniture companies.',
                logo: TheNorthernLogo,
                isLogoSVG: true,
                background: '#fff',
                page: 'TheNorthern',
                hasUrl: true,
                url: 'https://kobelatonio.github.io/thenorthern/'
            },
        ]
    },
    {
        category: 'Mobile',
        list: [
            {
                title: 'Filinventions',
                description: 'An e-commerce mobile application that addresses the challenges of Filipino local innovators living in NCR and CAR.',
                logo: FilinventionsLogo,
                isLogoSVG: true,
                background: '#c72424',
                page: 'Filinventions',
                hasUrl: false,
                url: null
            }
        ]
    },
    {
        category: 'Game',
        list: [
            {
                title: 'The Vortex',
                description: 'A single-player game set inside and outside of space tunnels with 20 well-defined levels filled with 3D geometric shapes.',
                logo: null,
                isLogoSVG: false,
                background: '#0038a8',
                page: 'Vortex',
                hasUrl: false,
                url: null
            }
        ]
    },
    {
        category: 'Branding',
        list: [
            {
                title: 'Food Cartel Nueva Ecija',
                description: 'Food Cartel is a homegrown food business with a mission to deliver flavorful and traditional Mexican dishes to Nueva Ecija.',
                logo: FoodCartelLogo,
                isLogoSVG: true,
                background: '#f2690d',
                page: 'FoodCartel',
                hasUrl: false,
                url: null
            },
            {
                title: 'Quintas Jewelry PH',
                description: 'A nationwide jewelry store that celebrates the modern Filipina beauty with affordable and classic jewelry pieces.',
                logo: QuintasLogo,
                isLogoSVG: true,
                background: '#f4e1d3',
                page: 'Quintas',
                hasUrl: false,
                url: null
            },
            {
                title: 'Ninna Handmade Collections',
                description: 'From chic fashion accessories to customizable pieces, Ninna offers all handmade crocheted needs.',
                logo: NinnaLogo,
                isLogoSVG: true,
                background: '#27363b',
                page: 'Ninna',
                hasUrl: false,
                url: null
            }
        ]
    }
]

const Projects = ({togglePage}) => {
    return (
        <section id="projects" className="projects-container">
            {projects.map((category, index) => (
                <FadeInWhenVisible key={index}>
                    <div className="projects">
                        <h1>{category.category}</h1>
                        {category.list.map((project, index) => (
                            <Project project={project} key={index} togglePage={togglePage}/>
                        ))}
                    </div>
                </FadeInWhenVisible>
            ))}
        </section>
    )
}

export default Projects
