import  {useState} from 'react';
import { FaBars, FaFacebook, FaInstagram, FaTimes } from 'react-icons/fa';
import { GiCarWheel} from 'react-icons/gi'
import './NavStyle.css'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const[slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    } 
 
  return (
    <>
    <div className="navbar">
        <div className="container">
            <div className={slide? "logo slide-right" : "logo" }>
                <h3>Super cars </h3>
            </div>
            <ul className={nav? "nav-menu active" : "nav-menu"}>
                <li><a href="/">Super</a></li>
                <li><a href="/">Speed</a></li>
                <li><a href="/">Handling</a></li>
                <li><a href="/">Options</a></li>
                <li><a href="/">Contact</a></li>


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
