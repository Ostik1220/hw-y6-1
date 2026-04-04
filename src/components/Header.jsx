import { NavLink } from 'react-router-dom';
import { Logo, RedText } from './components.styled';

export const Header = ({isMainPage}) => {
    console.log(isMainPage)
    if (isMainPage === true){    return ( <div className='header'>
        <nav className='nav'>
                      <NavLink to="/" end className='navLink' id="active">            
              Home
            </NavLink>
                      <NavLink to="/movies" end className='navLink'>            
              Movies
            </NavLink>
        </nav>
        <div className='display'><Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Eo_circle_red_letter-m.svg/3840px-Eo_circle_red_letter-m.svg.png" alt="M"/><RedText>ovies</RedText></div>
        </div>
    )} else {
            return ( <div className='header'>
        <nav className='nav'>
                      <NavLink to="/" end className='navLink' >            
              Home
            </NavLink>
                      <NavLink to="/movies" end className='navLink'id="active">            
              Movies
            </NavLink>
        </nav>
        <div className='display'><Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Eo_circle_red_letter-m.svg/3840px-Eo_circle_red_letter-m.svg.png" alt="M"/><RedText>ovies</RedText></div>
        </div>
    )
    }


}