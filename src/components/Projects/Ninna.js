import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// IMAGES
import NinnaLogo from '../../media/logos/ninna.svg';
import Highlight1 from '../../media/ninna/1.png';
import Highlight2 from '../../media/ninna/2.png';
import Highlight3 from '../../media/ninna/3.png';
import Highlight4 from '../../media/ninna/4.png';
import Packaging from '../../media/ninna/5.svg';
import Product1 from '../../media/ninna/6.jpg';
import Product2 from '../../media/ninna/7.jpg';
import Product3 from '../../media/ninna/8.jpg';
import Product4 from '../../media/ninna/9.jpg';
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

const Ninna = ({togglePage, isPageShown}) => {
    useEffect(() => {
        if(isPageShown) {
            document.querySelector('.box4').scrollTo({top: 0});
        }
    }, [isPageShown])
    
    return (
        <AnimatePresence>
            <motion.div className="preview"
                variants={containerVariants}
                animate={isPageShown ? "visible" : "hidden"}
                initial={false}
            >
                <div className="preview-box box4">
                    <h6 className="close" onClick={() => togglePage('Ninna')}>×</h6>
                    <div className="box">
                        <h1>Ninna Handmade Collections</h1>
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
                        <img src={NinnaLogo} alt="img1"/>
                    </div>
                    <div className="media-out col4">
                        <img src={Highlight1} alt="img1"/>
                        <img src={Highlight2} alt="img1"/>
                        <img src={Highlight3} alt="img1"/>
                        <img src={Highlight4} alt="img1"/>
                    </div>
                    <img src={Packaging} alt="img1"/>
                    <div className="media-out col2">
                        <img src={Product1} alt="img1"/>
                        <img src={Product2} alt="img1"/>
                        <img src={Product3} alt="img1"/>
                        <img src={Product4} alt="img1"/>
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
    background: '#27363b'
}

export default Ninna
