import { motion } from "framer-motion"

const Header = ({viewProjects}) => {
    return (
        <header>
            <div className="container">
                <motion.div className="logo-container"
                    initial={{y: 0}} 
                    animate={{y: 0}} 
                    transition={{duration: 1, delay: 2, ease: "easeOut"}}
                >
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 500 500" style={{enableBackground: 'new 0 0 500 500'}} className="logo">
                        <motion.path 
                        initial={{strokeDashoffset: 3000}} 
                        animate={{strokeDashoffset: 0}} 
                        transition={{duration: 2.5, delay: 0.2, ease: "easeInOut"}}
                        style={logoStyle} className="st0" d="M132.2,160.6V29.9c0-7.9-6.4-14.4-14.4-14.4H72.4c-7.9,0-14.4,6.4-14.4,14.4v440.3c0,7.9,6.4,14.4,14.4,14.4
                        h45.4c7.9,0,14.4-6.4,14.4-14.4V249.8c0-7.6,3-14.9,8.4-20.3L343.5,26.6c6.6-6.6,15.5-10.3,24.8-10.3h51.6
                        c12.8,0,19.2,15.5,10.1,24.5L211.4,259.4c-13.1,13.1-13.7,34-1.5,47.9l145.5,165.3c6.6,7.6,16.2,11.9,26.3,11.9h45.8
                        c12.4,0,18.9-14.6,10.8-23.8L278.1,279"/>
                    </svg>
                </motion.div>            
                <motion.h1 
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    transition={{duration: 1, delay: 2, ease: "easeOut"}}
                >
                    Hi! <span className="wave">👋</span> I’m Kobe Latonio.<br/>I love to design and develop<br/>things that live on the web.
                </motion.h1>
                <motion.div className="buttons"
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    transition={{duration: 1, delay: 2.75, ease: "easeOut"}}
                >
                    <button onClick={() => viewProjects()}>Projects</button>
                    <a href="https://drive.google.com/file/d/1p1HB_jNhNhCuWZIEUHFKAlaqyxnGrvbJ/view?usp=sharing" className="button" target="_blank">Resume</a>
                </motion.div> 
            </div> 
        </header>
    )
}

const logoStyle = {
  fill: 'none',
  stroke: '#0F0F0F',
  strokeWidth: '30.1421',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeMiterlimit: '10'
}

export default Header
