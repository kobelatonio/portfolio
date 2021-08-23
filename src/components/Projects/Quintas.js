import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// IMAGES
import QuintasLogo from '../../media/logos/quintas.svg';
import NewPackaging1 from '../../media/quintas/1.jpg';
import NewPackaging2 from '../../media/quintas/2.jpg';
import NewPackaging3 from '../../media/quintas/3.jpg';
import NewPackaging4 from '../../media/quintas/4.jpg';
import OldPackaging1 from '../../media/quintas/5.jpg';
import OldPackaging2 from '../../media/quintas/6.jpg';
import Card from '../../media/quintas/7.svg';
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

const Quintas = ({togglePage, isPageShown}) => {
    useEffect(() => {
        if(isPageShown) {
            document.querySelector('.box5').scrollTo({top: 0});
        }
    }, [isPageShown])
    
    return (
        <AnimatePresence>
            <motion.div className="preview"
                variants={containerVariants}
                animate={isPageShown ? "visible" : "hidden"}
                initial={false}
            >
                <div className="preview-box box5">
                    <h6 className="close" onClick={() => togglePage('Quintas')}>×</h6>
                    <div className="box">
                        <h1>Quintas Jewelry PH</h1>
                        <div className="tech">
                            <p>T E C H :</p>
                            <div className="tools">
                                <p>Adobe Illustrator</p>
                            </div>
                        </div>
                        <div className="tech">
                            <p>T A S K :</p>
                            <div className="tools">
                                <p>Logo Design</p>
                                <p>Packaging Design</p>
                                <p>Graphic Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="media logo-branding" style={backgroundStyle}>
                        <img src={QuintasLogo} alt="img1"/>
                    </div>
                    <div className="media-out col2">
                        <img src={NewPackaging1} alt="img1"/>
                        <img src={NewPackaging2} alt="img1"/>
                        <img src={NewPackaging3} alt="img1"/>
                        <img src={NewPackaging4} alt="img1"/>
                    </div>
                    <div className="media logo-branding" style={backgroundStyle}>
                        <img src={Card} alt="img1"/>
                    </div>
                    <div className="media-out col2">
                        <img src={OldPackaging1} alt="img1"/>
                        <img src={OldPackaging2} alt="img1"/>
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
    background: '#f4e1d3'
}

export default Quintas
