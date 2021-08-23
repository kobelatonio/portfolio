import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// IMAGES
import Introduction from '../../media/ched/1.png';
import Welcome1 from '../../media/ched/2.png';
import Welcome2 from '../../media/ched/3.png';
import Welcome3 from '../../media/ched/4.png';
import Welcome4 from '../../media/ched/5.png';
import Application1 from '../../media/ched/6.png';
import Application2 from '../../media/ched/7.png';
import Application3 from '../../media/ched/8.png';
import Application4 from '../../media/ched/9.png';
import Scholar1 from '../../media/ched/10.png';
import Scholar2 from '../../media/ched/11.png';
import Scholar3 from '../../media/ched/12.png';
import Scholar4 from '../../media/ched/13.png';
import Coordinator1 from '../../media/ched/14.png';
import Coordinator2 from '../../media/ched/15.png';
import Coordinator3 from '../../media/ched/16.png';
import Coordinator4 from '../../media/ched/17.png';
import Admin1 from '../../media/ched/18.png';
import Admin2 from '../../media/ched/19.png';
import Admin3 from '../../media/ched/20.png';
import Admin4 from '../../media/ched/21.png';
import Admin5 from '../../media/ched/22.png';
import Admin6 from '../../media/ched/23.png';
import Logo from '../../media/logos/kobe.svg';

const containerVariants = {
    hidden: {
        y: '100vh',
        transition: {duration: 0.15, ease: 'easeOut'}
    },
    visible: {
        y: '0vh',
        transition: {duration: 0.15, ease: 'easeOut'}
    }
}

const CHED = ({togglePage, isPageShown}) => {
    useEffect(() => {
        if(isPageShown) {
            document.querySelector('.box1').scrollTo({top: 0});
        }
    }, [isPageShown])

    return (
        <AnimatePresence>
            <motion.div className="preview"
                variants={containerVariants}
                animate={isPageShown ? "visible" : "hidden"}
                initial={false}
            >
                <div className="preview-box box1">
                    <h6 className="close" onClick={() => togglePage('CHED')}>×</h6>
                    <div className="box">
                        <h1>CHED-CAR Scholarship</h1>
                        <div className="tech">
                            <p>T E C H :</p>
                            <div className="tools">
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>Laravel</p>
                                <p>MySQL</p>
                                <p>AWS</p>
                            </div>
                        </div>
                        <div className="tech">
                            <p>T A S K :</p>
                            <div className="tools">
                                <p>UI & UX</p>
                                <p>Prototyping</p>
                                <p>Programming</p>
                            </div>
                        </div>
                        <p>For our internship, our department in the University of the Cordilleras assigned us to work at the Commission on Higher Education - Cordillera Administrative Region (CHED-CAR). It was a project-based internship wherein we were tasked to create a web system for the the CHED Scholarship Program.</p>
                    </div>
                    <div className="media" style={backgroundStyle}>
                        <img src={Introduction} alt="img1"/>
                    </div>

                    {/* WELCOME PAGE */}
                    <div className="box">
                        <h1>Welcome Page</h1>
                        <p>On the welcome page, everything that an applicant needs to know has been provided including the latest application period, financial assistance programs being offered, steps in applying, requirements, and contact details of CHED-CAR.</p>
                    </div>
                    <div className="scrollable dragscroll" style={backgroundStyle}>
                        <div className="scrollable-container">
                            <img src={Welcome1} alt="img1"/>
                            <img src={Welcome2} alt="img1"/>
                            <img src={Welcome3} alt="img1"/>
                            <img src={Welcome4} alt="img1"/>
                        </div>
                    </div>

                    {/* ONLINE APPLICATION */}
                    <div className="box">
                        <h1>Online Application</h1>
                        <p>The online application form was designed to become less intimidating and easier to complete. It was divided into manageable sections allowing the applicant to clearly map their progress. It was also designed in a way that they only have to enter the information applicable for them, making the application process more efficient and less laborious.<br/><br/>After the application is submitted, a PDF version of the official CHED Scholarship Program application form will be downloaded with the information and documents that the applicant provided.</p>
                    </div> 
                    <div className="scrollable dragscroll" style={backgroundStyle}>
                        <div className="scrollable-container">
                            <img src={Application1} alt="img1"/>
                            <img src={Application2} alt="img1"/>
                            <img src={Application3} alt="img1"/>
                            <img src={Application4} alt="img1"/>
                        </div>
                    </div>

                    {/* SCHOLAR */}
                    <div className="box">
                        <h1>Scholar Account</h1>
                        <p>The scholars of CHED-CAR can also log in and sign up into the system, wherein they can keep track of their latest status and view their scholarship details. It also allows them to upload payment requirements in order for CHED-CAR to send them their financial benefits.<br/><br/>With the new system, instead of asking the CHED-CAR staff multiple times for updates regarding their financial benefits, scholars can already check on their financial benefits every semester in their own time using the new system. Lastly, scholars will be able to keep their personal information up-to-date.</p>
                    </div>
                    <div className="scrollable dragscroll" style={backgroundStyle}>
                        <div className="scrollable-container">
                            <img src={Scholar1} alt="img1"/>
                            <img src={Scholar2} alt="img1"/>
                            <img src={Scholar3} alt="img1"/>
                            <img src={Scholar4} alt="img1"/>
                        </div>
                    </div>

                    {/* SCHOLARSHIP COORDINATOR */}
                    <div className="box">
                        <h1>Scholarship Coordinator Account</h1>
                        <p>The scholarship coordinators from each higher education institution can also log in and sign up into the system. The system allows them to easily manage the scholars that came from their school, wherein they can update the personal information of undergraduate scholars, as well as notify the CHED-CAR staff if a scholar has recently graduated.<br/><br/>The coordinators will also have a better time in generating a billing statement which is used by CHED-CAR in processing the payments for the scholars. This resolves the issue that, every semester, numerous HEIs are behind the schedule in submitting their billing statements to CHED-CAR resulting in delay in the processing of financial benefits for the scholars.</p>
                    </div>
                    <div className="scrollable dragscroll" style={backgroundStyle}>
                        <div className="scrollable-container">
                            <img src={Coordinator1} alt="img1"/>
                            <img src={Coordinator2} alt="img1"/>
                            <img src={Coordinator3} alt="img1"/>
                            <img src={Coordinator4} alt="img1"/>
                        </div>
                    </div>

                    {/* ADMINISTRATOR */}
                    <div className="box">
                        <h1>Administrator Account</h1>
                        <p>The admin panel alone consists of 16 main pages that further navigate to subpages. This part of the system required a lot of analysis and decision-making processes because most of their operations before can already be performed here.<br/><br/>The most requested feature is the generation of reports which are to be submitted to the CHED Central Office. Before, monitoring of applicants and scholars was manually done using spreadsheets which contain thousands of rows and would literally take days to finish. Thus, enter the new system which allows the staff to generate reports using only a few clicks.</p>
                    </div>
                    <div className="scrollable dragscroll" style={backgroundStyle}>
                        <div className="scrollable-container">
                            <img src={Admin1} alt="img1"/>
                            <img src={Admin2} alt="img1"/>
                            <img src={Admin3} alt="img1"/>
                            <img src={Admin4} alt="img1"/>
                            <img src={Admin5} alt="img1"/>
                            <img src={Admin6} alt="img1"/>
                        </div>
                    </div>

                    <center>
                        <div className="logo-container">
                            <img src={Logo} alt="" />
                        </div>   
                    </center>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

const backgroundStyle = {
    background: '#0952c6'
}

export default CHED
