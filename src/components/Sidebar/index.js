import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
return(
  <div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoS} alt="logo"  />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
        <NavLink 
        activeclassname="active" 
        to="/"
        >
            <FontAwesomeIcon icon={faHome} clor="40404e" />
        </NavLink>
        <NavLink
        activeclassname="active"
        className="about-link"
        to="/about"
        >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink 
        activeclassname="active"
        className="contact-link"
        to="/contact"
        >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
            <li>
                <a 
                target = "_blank"
                rel="noreferrer"
                href='https://www.linkedin.com/in/adammmessina/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d43" />
                </a>
            </li>
            <li>
                <a 
                target = "_blank"
                rel="noreferrer"
                href='https://github.com/amessina1999'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d43" />
                </a>
            </li>
            <li>
              <a 
                target = "_blank"
                rel="noreferrer"
                href='https://www.instagram.com/a_messina_19/?hl=en'
                >
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d43" />
              </a>
            </li>
         </ul>
    </div>
)
}

export default Sidebar