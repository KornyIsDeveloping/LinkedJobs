import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

//creating the class component
class Navbar extends Component{
//using render because of we're extending the component
    render(){
        return(
            <nav className='navbarItems'>
                <h1 className='navbar-logo'>LinkedJobs</h1>
                <ul className='navbar-menu'>
                    <li>
                        <a>Home</a>
                        <a>Browse Jobs</a>
                        <a>Post a Job</a>
                        <a>About</a>
                        <a>About</a>
                        <a>Contact</a>
                        {/* <Link>Browse Jobs</Link>
                        <Link>Post a Job</Link> */}
                        {/* <Link>News</Link> */}
                        {/* <Link>About</Link>
                        <Link>Contact</Link> */}
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;