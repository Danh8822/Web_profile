import './Hero.css';
import avarta from '../../Assets/avarta.png';
import img1 from '../../Assets/img1.png';
import html from '../../Assets/html.png';
import css from '../../Assets/css.png';
import js from '../../Assets/js.png';

const Hero = () => {
    return <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate Frontend Developer | Transforming Ideas into Seamless and
                Visually Stunning Web Solutions
            </p>
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src={img1} alt="" />
                </div>
                <img src={avarta} alt="" />
            </div>

            <div>
                <div className="tech-icon">
                    <img src={html} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={css} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={js} alt="" />
                </div>
            </div>
        </div>

    </section>
        
    
}
 
export default Hero;