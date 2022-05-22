import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png';
import AnimiatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray1 = ['F', 'u', 'n', 'n', 'y', ' '] 
    const nameArray2 = ['Y', 'o', 'u', ' ']
    const nameArray3 = ['S', 'h', 'o', 'u', 'l', 'd', ' ']
    const nameArray4 = ['A', 's', 'k']
    const jobArray = ['J', 'a', 'z', 'z', '/', 'F', 'u', 'n','k', ' ', 'B', 'a', 'n', 'd']

    useEffect(() =>{
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return(
    <div className= "container home-page">
        <div className='text-zone'>
            <h1> 
            <span className={letterClass}>W</span>
            <span className={`${letterClass} _12`}>h</span>
            <span className={`${letterClass} _13`}>o </span>
            <span className={`${letterClass} _14`}> </span>
            <span className={`${letterClass} _15`}>A</span>
            <span className={`${letterClass} _16`}>r</span>
            <span className={`${letterClass} _17`}>e </span>
            <span className={`${letterClass} _18`}> </span>
            <span className={`${letterClass} _19`}>W</span>
            <span className={`${letterClass} _20`}>e</span>
            <span className={`${letterClass} _21`}>?</span>
            <br />
            <span className={`${letterClass} _22`}>I</span>
            <span className={`${letterClass} _23`}>t</span>
            <span className={`${letterClass} _24`}>'s</span>
            <br />
            <AnimiatedLetters letterClass={letterClass}
            strArray={nameArray1}
            idx={25} />
             <AnimiatedLetters letterClass={letterClass}
            strArray={nameArray2}
            idx={31} />
             <AnimiatedLetters letterClass={letterClass}
            strArray={nameArray3}
            idx={35} />
             <AnimiatedLetters letterClass={letterClass}
            strArray={nameArray4}
            idx={42} />
            <img src={LogoTitle} alt="Funny You Should Ask" />
            </h1>
            <h2>
            <AnimiatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={62} />
            </h2>
            <Link to="/contact" className='flat-button'> CONTACT US</Link>
        

        </div>
        <Logo />
    </div>


   );  
}

export default Home