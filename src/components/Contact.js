import Logo from '../media/logos/kobe.svg';
import FadeInWhenVisible from "./FadeInWhenVisible"

const Contact = () => {
    return (
        <>
        <FadeInWhenVisible>
            <div className="contact">
                    <h1>Contact</h1>
                    <div className="contacts">
                        <p><span className="bold">Email </span>- kobebryan5598@gmail.com</p>
                        <p><span className="bold">Phone </span>- 0935 591 2581</p>
                        <p><span className="bold">LinkedIn </span>- <a href="https://www.linkedin.com/in/kobelatonio/" target="_blank">kobelatonio</a></p>
                    </div>
            </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
            <div className="creator">
                <div className="logo-container">
                    <img src={Logo} alt="" />
                </div>   
                <p>Handcrafted by <span className="bold">Kobe Bryan S. Latonio</span><br/>August 2021</p>
            </div>
        </FadeInWhenVisible>
        </>
    )
}

export default Contact
