import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import PlayWhenVisible from '../PlayWhenVisible';

// MEDIA
import Welcome from '../../media/vortex/6.png';
import Video1 from '../../media/vortex/1.mp4';
import Video2 from '../../media/vortex/2.mp4';
import Video3 from '../../media/vortex/3.mp4';
import Video4 from '../../media/vortex/4.mp4';
import Video5 from '../../media/vortex/5.mp4';
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

const Vortex = ({togglePage, isPageShown}) => {
    useEffect(() => {
        if(isPageShown) {
            document.querySelector('.box6').scrollTo({top: 0});
        }
    }, [isPageShown])
    
    return (
        <AnimatePresence>
            <motion.div className="preview"
                variants={containerVariants}
                animate={isPageShown ? "visible" : "hidden"}
                initial={false}
            >
                <div className="preview-box box6">
                    <h6 className="close" onClick={() => togglePage('Vortex')}>×</h6>
                    <div className="box">
                        <h1>The Vortex</h1>
                        <div className="tech">
                            <p>T E C H :</p>
                            <div className="tools">
                                <p>Unity</p>
                                <p>C#</p>
                                <p>Blender</p>
                            </div>
                        </div>
                        <div className="tech">
                            <p>T A S K :</p>
                            <div className="tools">
                                <p>UI & UX</p>
                                <p>Game Design</p>
                                <p>3D Modeling</p>
                                <p>Programming</p>
                            </div>
                        </div>
                        <p>In our Game Development course, we were formed into groups and each group was tasked to create any game that we can think of. With the short amount of time, our team have come up with a casual game wherein it has simple rules, short levels, and less learned skills to create excitement for the players.</p>
                    </div>
                    <div className="media" style={backgroundStyle}>
                        <img src={Welcome} alt="img1"/>
                    </div>

                    <div className="box">
                        <h1>Landing Page</h1>
                        <p>The Vortex has a level-based, skill-centric gameplay with 3D visuals and well-defined level designs. The players will be welcomed with the menu and title screen and throughout the game, the color scheme used is only of blue, magenta, and white to achieve the uniformed minimalist aesthetic. Our team agreed that the simplicity of the design that we went for balances out the challenging obstacles the players should expect from the game which makes it exciting.</p>
                    </div>
                    <div className="media2" style={backgroundStyle}>
                        <PlayWhenVisible video={Video1} index='video1'/>
                    </div>

                    <div className="box">
                        <h1>20 Unique Levels</h1>
                        <p>Because The Vortex is an auto-runner where the objective is to reach the end of each level, the game is continuous but still split up into 20 levels. Every two levels have the same 3D geometric shape. For example, in levels 1 and 2, the shape will be a rectangular prism, while levels 3 and 4 have cubes as the obstacles. The players would have to finish the level that they are on before unlocking the next levels because they cannot choose a level greater than what they are on.</p>
                    </div>
                    <div className="media2" style={backgroundStyle}>
                        <PlayWhenVisible video={Video2} index='video2'/>
                    </div>

                    <div className="box">
                        <h1>Indoor Tunnels</h1>
                        <p>The Vortex is a first-person game wherein the player will steer through the series of tunnels by pressing the left or right arrow keys while avoiding different obstacles with increasing speed in order to survive all the levels. On the upper part of the screen, the distance traveled is shown in meters as well as the speed per second.</p>
                    </div>
                    <div className="media2" style={backgroundStyle}>
                        <PlayWhenVisible video={Video3} index='video3'/>
                    </div>

                    <div className="box">
                        <h1>Outdoor Tunnels</h1>
                        <p>There are two main settings throughout the whole game which will either be an indoor or outdoor vortex alternating on every level.</p>
                    </div>
                    <div className="media2" style={backgroundStyle}>
                        <PlayWhenVisible video={Video4} index='video4'/>
                    </div>

                    <div className="box">
                        <h1>Game Over</h1>
                        <p>The challenging part about The Vortex is that at each level, the players are only given one life. Once hit with an obstacle at any part in the game, the player will automatically be directed at the beginning of the level when they choose the restart button and would have to start over.</p>
                    </div>
                    <div className="media2" style={backgroundStyle}>
                        <PlayWhenVisible video={Video5} index='video5'/>
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
    background: '#3b32bf'
}

export default Vortex
