import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// IMAGES
import Introduction1 from '../../media/filinventions/1.png';
import Introduction2 from '../../media/filinventions/2.png';
import Introduction3 from '../../media/filinventions/3.png';
import Account1 from '../../media/filinventions/4.png';
import Account2 from '../../media/filinventions/5.png';
import Account3 from '../../media/filinventions/6.png';
import Account4 from '../../media/filinventions/7.png';
import Account5 from '../../media/filinventions/8.png';
import Account6 from '../../media/filinventions/9.png';
import Home1 from '../../media/filinventions/10.png';
import Home2 from '../../media/filinventions/11.png';
import Home3 from '../../media/filinventions/12.png';
import Ideas1 from '../../media/filinventions/13.png';
import Ideas2 from '../../media/filinventions/14.png';
import Ideas3 from '../../media/filinventions/15.png';
import Pitch1 from '../../media/filinventions/16.png';
import Pitch2 from '../../media/filinventions/17.png';
import Pitch3 from '../../media/filinventions/18.png';
import Pitch4 from '../../media/filinventions/19.png';
import Pitch5 from '../../media/filinventions/20.png';
import Pitch6 from '../../media/filinventions/21.png';
import Market1 from '../../media/filinventions/22.png';
import Market2 from '../../media/filinventions/23.png';
import Market3 from '../../media/filinventions/24.png';
import Market4 from '../../media/filinventions/25.png';
import Market5 from '../../media/filinventions/3.png';
import Market6 from '../../media/filinventions/26.png';
import Market7 from '../../media/filinventions/27.png';
import Market8 from '../../media/filinventions/28.png';
import Market9 from '../../media/filinventions/29.png';
import IPRights1 from '../../media/filinventions/30.png';
import IPRights2 from '../../media/filinventions/31.png';
import IPRights3 from '../../media/filinventions/32.png';
import IPRights4 from '../../media/filinventions/33.png';
import IPRights5 from '../../media/filinventions/34.png';
import IPRights6 from '../../media/filinventions/35.png';
import Chats1 from '../../media/filinventions/36.png';
import Chats2 from '../../media/filinventions/37.png';
import Chats3 from '../../media/filinventions/38.png';
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

const Filinventions = ({togglePage, isPageShown}) => {
    useEffect(() => {
        if(isPageShown) {
            document.querySelector('.box2').scrollTo({top: 0});
        }
    }, [isPageShown])

    return (
        <AnimatePresence>
            <motion.div className="preview"
                variants={containerVariants}
                animate={isPageShown ? "visible" : "hidden"}
                initial={false}
            >
                <div className="preview-box box2">
                    <h6 className="close" onClick={() => togglePage('Filinventions')}>×</h6>
                    <div className="box">
                        <h1>Filinventions</h1>
                        <div className="tech">
                            <p>T E C H :</p>
                            <div className="tools">
                                <p>Flutter</p>
                                <p>Dart</p>
                                <p>Cloud Firestore</p>
                                <p>Firebase Storage</p>
                            </div>
                        </div>
                        <div className="tech">
                            <p>T A S K :</p>
                            <div className="tools">
                                <p>Logo Design</p>
                                <p>Graphic Design</p>
                                <p>UI & UX</p>
                                <p>Prototyping</p>
                                <p>Programming</p>
                            </div>
                        </div>
                        <p>There are many existing problems that local innovators often encounter including lack of financial assistance, finding investors, finding manufacturers, intellectual property rights awareness, and commercialization or business awareness. Thus, we explored ways on how to tackle these issues.<br/><br/>The result of our studies is utilizing an e-commerce platform using a mobile application that addresses the needs of innovators based on their problems. The reason being is that e-commerce functions through the internet and internet connects people online. Thus, innovators have a chance to widen their influence in the online market community. Aside from the marketplace, the Filinventions mobile application also provides other platforms including ideation, pitching, information, and communication platforms to ease the problems that plague innovators for the longest of times.</p>
                    </div>
                    <div className="media col3" style={backgroundStyle}>
                        <img src={Introduction1} alt="img1"/>
                        <img src={Introduction2} alt="img1"/>
                        <img src={Introduction3} alt="img1"/>
                    </div>

                    {/* USER ACCOUNT MNGT */}
                    <div className="box">
                        <h1>User Account Management</h1>
                        <p>This major feature allows unregistered users to setup their own account by signing up. The users can sign up as an innovator, enabler, or buyer, and each role has a unique sign up process. Once registered, users will be provided the functionality to log in and out of their account as well as view and update their account details.</p>
                    </div>
                    <div className="media col3" style={backgroundStyle}>
                        <img src={Account1} alt="img1"/>
                        <img src={Account2} alt="img1"/>
                        <img src={Account3} alt="img1"/>
                        <img src={Account4} alt="img1"/>
                        <img src={Account5} alt="img1"/>
                        <img src={Account6} alt="img1"/>
                    </div>

                    {/* HOME PAGE */}
                    <div className="box">
                        <h1>Information Platform in Home Page</h1>
                        <p>The first page in the application is the Home page. This page contains the information section which refers to the News, Programs, and Events tabs that consist of the latest updates related to local innovations.</p>
                    </div> 
                    <div className="media col3" style={backgroundStyle}>
                        <img src={Home1} alt="img1"/>
                        <img src={Home2} alt="img1"/>
                        <img src={Home3} alt="img1"/>
                    </div>

                    {/* IDEAS PAGE */}
                    <div className="box">
                        <h1>Ideas Page</h1>
                        <p>The purpose of the Ideas page is to encourage users to brainstorm possible ideas that may one day be made into reality by capable innovators. The posted ideas are required to be related to problems in a specific industry or technological solutions in order to keep the topic consistent and maintain the real purpose and function of this platform.</p>
                    </div>
                    <div className="media col3" style={backgroundStyle}>
                        <img src={Ideas1} alt="img1"/>
                        <img src={Ideas2} alt="img1"/>
                        <img src={Ideas3} alt="img1"/>
                    </div>

                    {/* PITCH PAGE */}
                    <div className="box">
                        <h1>Pitch Page</h1>
                        <p>The proposed application also has a pitching platform where it will be utilized for posting video pitches (exclusive feature for innovators) featuring technological innovations. The purpose of this page is to connect innovators with capable enablers and have them cooperate with each other in developing the innovation until its commercialization. The usable features of the pitch page vary depending on the role of the users.</p>
                    </div>
                    <div className="media col3" style={backgroundStyle}>
                        <img src={Pitch1} alt="img1"/>
                        <img src={Pitch2} alt="img1"/>
                        <img src={Pitch3} alt="img1"/>
                        <img src={Pitch4} alt="img1"/>
                        <img src={Pitch5} alt="img1"/>
                        <img src={Pitch6} alt="img1"/>
                    </div>

                    {/* MARKET PAGE */}
                    <div className="box">
                        <h1>Market Page</h1>
                        <p>This page’s sole purpose is to help innovators commercialize their registered intellectual properties in a digital platform and for them to gain income through willing buyers of their innovative products. Only the innovator’s registered intellectual properties could be sold in the Market page to avoid the piracy of unregistered intellectual properties.<br/><br/>Buyers as well as innovators will have a chance to skim through the showcased products and if anything catches their interest, these users can buy the products by checking out and placing their orders.</p>
                    </div>
                    <div className="media col3" style={backgroundStyle}>
                        <img src={Market1} alt="img1"/>
                        <img src={Market2} alt="img1"/>
                        <img src={Market3} alt="img1"/>
                        <img src={Market4} alt="img1"/>
                        <img src={Market5} alt="img1"/>
                        <img src={Market6} alt="img1"/>
                        <img src={Market7} alt="img1"/>
                        <img src={Market8} alt="img1"/>
                        <img src={Market9} alt="img1"/>
                    </div>

                    {/* IP RIGHTS PAGE */}
                    <div className="box">
                        <h1>IP Rights Page</h1>
                        <p>This page contains helpful basic information about intellectual property rights that would prove useful especially when innovators venture into commercialization and ownership. Links such as patent searching and official links to application forms are also included to help first time applicants of IP rights.<br/><br/>Types of intellectual properties, including their examples were also provided to give interested users an idea of what type their innovations fall under. The information written in the page is referenced from the Intellectual Property Office of the Philippines’ official government website.</p>
                    </div>
                    <div className="media col3" style={backgroundStyle}>
                        <img src={IPRights1} alt="img1"/>
                        <img src={IPRights2} alt="img1"/>
                        <img src={IPRights3} alt="img1"/>
                        <img src={IPRights4} alt="img1"/>
                        <img src={IPRights5} alt="img1"/>
                        <img src={IPRights6} alt="img1"/>
                    </div>

                    {/* CHATS PAGE */}
                    <div className="box">
                        <h1>Chats Page</h1>
                        <p>This feature of the application provides a real-time or live transmission of messages from a user to another user. This allows the users to communicate and interact more with each other especially inquiries by enablers to innovators or vice versa and inquiries by buyers to innovators about innovative products.</p>
                    </div>
                    <div className="media col3" style={backgroundStyle}>
                        <img src={Chats1} alt="img1"/>
                        <img src={Chats2} alt="img1"/>
                        <img src={Chats3} alt="img1"/>
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
    background: '#c72424'
}

export default Filinventions
