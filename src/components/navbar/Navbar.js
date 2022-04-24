import  {useState} from 'react';
import { FaBars, FaFacebook, FaInstagram, FaTimes } from 'react-icons/fa';
import { GiCarWheel} from 'react-icons/gi'
import './NavStyle.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const[slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    } 

    const handleClose = () => { 
        setNav(!nav)
    } 
 
  return (
    <>
    <div className="navbar">
        <div className="container">
            <div className={slide? "logo slide-right" : "logo" }>
                <h3>Super cars </h3>
            </div>
            <ul className={nav? "nav-menu active" : "nav-menu"}>
                <li><a href="/">                <Link onClick={handleClose} activeClass="active" to="super" spy={true} smooth={true} duration={500}>Super</Link>
</a></li>
                <li><a href="/">                <Link onClick={handleClose} activeClass="active" to="speed" spy={true} smooth={true} duration={500}>Speed</Link>
</a></li>
                <li><a href="/">                <Link onClick={handleClose} activeClass="active" to="handling" spy={true} smooth={true} duration={500}>Handling</Link>
</a></li>
                <li><a href="/">                <Link onClick={handleClose} activeClass="active" to="options" spy={true} smooth={true} duration={500}>Options</Link>
</a></li>
                <li><a href="/">                <Link onClick={handleClose} activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
</a></li>


                <div className="mobile-menu">
                    <button>Shop</button>
                    <button>Account</button>
                    <div className="social-icons">
                        <FaFacebook className="icon"/>
                        <FaInstagram className="icon"/>
                        <GiCarWheel className="icon"/>
                    </div>
                </div>
            </ul>
            <ul className="nav-menu hide">
                <li><a href="/">Shop</a></li>
                <li><a href="/">Account</a></li>
            </ul>
            <div className="hamburger" onClick={handleNav} >
                {nav? (<FaTimes size={20} color={'#fff'}/>) : (<FaBars size={20} color={'#fff'}/>)}
                
            </div>
        </div>

    </div> 
    </>
  );
}

export default Navbar;
