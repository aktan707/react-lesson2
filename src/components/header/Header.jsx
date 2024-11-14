
import './header.css'
import CartIcon from '../../assets/cart-icon.svg'
// component

function Header (){
    return (
        <header className='container'>
            <div className="left">
                <div>C</div>
                <h3>Capi<span>to</span></h3>
                <a className='active' href="">Home</a>
                <a href="">Menu</a>
            </div>
            <div className="right">
                <button className='cart'>
                    <img src={CartIcon} alt="" />
                    <span className='cart-number'>3</span>
                </button>
                <button className='btn log-in'>Log in</button>
            </div>
        </header>
    )
}

export default Header;