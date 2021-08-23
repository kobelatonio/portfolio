import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// IMAGES
import FoodCartelLogo from '../../media/logos/foodcartel.svg';
import Menu1 from '../../media/foodcartel/1.jpg';
import Menu2 from '../../media/foodcartel/2.jpg';
import Menu3 from '../../media/foodcartel/3.jpg';
import Menu4 from '../../media/foodcartel/4.jpg';
import Menu5 from '../../media/foodcartel/5.jpg';
import Menu6 from '../../media/foodcartel/6.jpg';
import SoloWrap1 from '../../media/foodcartel/7.png';
import SoloWrap2 from '../../media/foodcartel/8.png';
import SoloWrap3 from '../../media/foodcartel/9.png';
import SoloWrap4 from '../../media/foodcartel/10.jpg';
import Others1 from '../../media/foodcartel/11.png';
import Others2 from '../../media/foodcartel/12.png';
import Others3 from '../../media/foodcartel/13.png';
import Others4 from '../../media/foodcartel/14.jpg';
import Others5 from '../../media/foodcartel/15.jpg';
import Others6 from '../../media/foodcartel/16.jpg';
import Others7 from '../../media/foodcartel/17.jpg';
import Drinks1 from '../../media/foodcartel/18.png';
import Drinks2 from '../../media/foodcartel/19.png';
import Drinks3 from '../../media/foodcartel/20.png';
import Drinks4 from '../../media/foodcartel/21.png';
import Drinks5 from '../../media/foodcartel/22.jpg';
import Drinks6 from '../../media/foodcartel/23.jpg';
import Drinks7 from '../../media/foodcartel/24.jpg';
import Drinks8 from '../../media/foodcartel/25.jpg';
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

const FoodCartel = ({togglePage, isPageShown}) => {
    useEffect(() => {
        if(isPageShown) {
            document.querySelector('.box3').scrollTo({top: 0});
        }
    }, [isPageShown])

    return (
        <AnimatePresence>
            <motion.div className="preview"
                variants={containerVariants}
                animate={isPageShown ? "visible" : "hidden"}
                initial={false}
            >
                <div className="preview-box box3">
                    <h6 className="close" onClick={() => togglePage('FoodCartel')}>×</h6>
                    <div className="box">
                        <h1>Food Cartel Nueva Ecija</h1>
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
                        <img src={FoodCartelLogo} alt="img1"/>
                    </div>
                    <div className="media-out col3 menu">
                        <img src={Menu1} alt="img1"/>
                        <img src={Menu2} alt="img1"/>
                        <img src={Menu3} alt="img1"/>
                        <img src={Menu4} alt="img1"/>
                        <img src={Menu5} alt="img1"/>
                        <img src={Menu6} alt="img1"/>
                    </div>
                    <div className="media col3" style={backgroundStyle}>
                        <img src={SoloWrap1} alt="img1"/>
                        <img src={SoloWrap2} alt="img1"/>
                        <img src={SoloWrap3} alt="img1"/>
                    </div>
                    <div className="media-out">
                        <img src={SoloWrap4} alt="img1"/>
                    </div>
                    <div className="media col3" style={backgroundStyle}>
                        <img src={Others1} alt="img1"/>
                        <img src={Others2} alt="img1"/>
                        <img src={Others3} alt="img1"/>
                    </div>
                    <div className="media-out col2">
                        <img src={Others4} alt="img1"/>
                        <img src={Others5} alt="img1"/>
                        <img src={Others6} alt="img1"/>
                        <img src={Others7} alt="img1"/>
                    </div>
                    <div className="media col4" style={backgroundStyle}>
                        <img src={Drinks1} alt="img1"/>
                        <img src={Drinks2} alt="img1"/>
                        <img src={Drinks3} alt="img1"/>
                        <img src={Drinks4} alt="img1"/>
                    </div>
                    <div className="media-out col2">
                        <img src={Drinks5} alt="img1"/>
                        <img src={Drinks6} alt="img1"/>
                        <img src={Drinks7} alt="img1"/>
                        <img src={Drinks8} alt="img1"/>
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
    background: '#f2690d'
}

export default FoodCartel
