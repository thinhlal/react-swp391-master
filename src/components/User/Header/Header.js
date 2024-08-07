//css
import './Header.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
//img
import logo from '../../../assets/images/Components/User/Header/logo.png';
import { AuthContext } from '../../../context/AuthContext';

function Header() {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className='main-header-user-overlap'>
      <div className='main-header-navigation'>
        <img
          className='main-header-logo'
          src={logo}
          alt=''
        />
        <div className='main-header-menu'>
          <div className='header_link'>
            <a
              href='/'
              className='header_link-text'
            >
              Home
            </a>
          </div>
          <div className='header_link'>
            <a
              href='services'
              className='header_link-text'
            >
              Services
            </a>
          </div>
          <div className='header_link'>
            <a
              href='#123'
              className='header_link-text'
            >
              About us
            </a>
          </div>
          <div className='header_link'>
            <a
              href='#123'
              className='header_link-text'
            >
              Contact
            </a>
          </div>
        </div>
        <div className='main-header-user_wrapper'>
          {user ? (
            <div className='main-header-user'>
              <div className='main-header-user-account'>
                <img
                  className='account_icon'
                  src={user?.customerDetails[0]?.image}
                  alt=''
                />
                <div className='main-header-user-account-name'>
                  Hi {user?.customerDetails[0]?.name}
                </div>
                <div className='main-header-user-account_menu'>
                  <a
                    href='your-booking'
                    className='main-header-user-account_menu-item'
                  >
                    Your Bookings
                  </a>
                  <a
                    href='your-pet'
                    className='main-header-user-account_menu-item'
                  >
                    View Your Pet
                  </a>
                  <a
                    href='user-profile'
                    className='main-header-user-account_menu-item'
                  >
                    Settings
                  </a>
                  <div
                    onClick={logOut}
                    className='main-header-user-account_menu-item'
                  >
                    Log out
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='auth-buttons'>
              <Link
                to='/login'
                className='auth-button'
              >
                Login
              </Link>
              <Link
                to='/signup'
                className='auth-button'
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
