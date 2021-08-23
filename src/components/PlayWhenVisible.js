import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const PlayWhenVisible = ({ video, index }) => {
    const [ref, inView] = useInView();
    useEffect(() => {  
        if (inView) {
            document.querySelector(`.${index}`).play();
        } else {
            document.querySelector(`.${index}`).pause();
        }
    }, [inView]);
  
    return (
        <video loop ref={ref} className={index}>
            <source src={video} type='video/mp4' />
        </video>
    );
}

export default PlayWhenVisible
