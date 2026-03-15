import { NavLink } from 'react-router-dom';

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
        </div>
    )
    }


}