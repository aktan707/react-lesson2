import HeroImg from '../../assets/hero-img.png'
import './hero.css'
function Hero () {
    return (
        <div className="hero container">
            <div className="hero-text">
                <p className='p-title'>Restauran</p>
                <h1>Italian <br/> Cuisine</h1>
                <p className='p-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
                <div className='hero-buttons'>
                    <button className='btn'>Order now</button>
                    <button className='btn'>Reservation</button>
                </div>
            </div>
            <div className="hero-img">
                <img src={HeroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero;