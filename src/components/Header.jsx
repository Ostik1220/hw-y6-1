import { NavLink } from 'react-router-dom';

export const Header = () => {

    return ( <div>
        <nav>
                      <NavLink to="/" end >            
              Home
            </NavLink>
                      <NavLink to="/movies" end >            
              Movies
            </NavLink>
        </nav>
        </div>
    )
}