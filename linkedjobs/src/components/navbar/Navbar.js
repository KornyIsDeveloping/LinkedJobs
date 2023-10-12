import { Component } from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'
import './Navbar.css'

//creating the class component
class Navbar extends Component{
//using render because of we're extending the component
    render(){
        return(
            <nav className='navbarItems'>
                <h1 className='navbar-logo'>LinkedJobs</h1>
                <div className='menu-icons'>
                    <i className='fas fa-bars'></i>
                    <i className='fas fa-times'></i> 
                </div>
                <ul className='navbar-menu'>
                    {MenuItems.map((item, index) => {
                        return(
                           <li key={index}>
                                <a className={item.cName} href='/'>{item.title}</a>
                            </li> 
                        )
                    })}
                    {/* <li>
                        <a>Home</a>
                        <a>Browse Jobs</a>
                        <a>Post a Job</a>
                        <a>About</a>
                        <a>News</a>
                        <a>Contact</a>
                        <a>Sing Up</a>

                        <Link>Browse Jobs</Link>
                        <Link>Post a Job</Link>
                        <Link>News</Link>
                        <Link>About</Link>
                        <Link>Contact</Link>
                        <Link>Sign Up</Link>
                    </li> */}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;