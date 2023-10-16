import { Component } from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'
import './Navbar.css'

//creating the class component
class Navbar extends Component{
    //implementing the burger menu functionality
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
//using render because of we're extending the component
    render(){
        return(
            <nav className='navbarItems'>
                <h1 className='navbar-logo'><span>L</span>inked<span>J</span>obs</h1>
                <div className='menu-icons'onClick={this.handleClick}>
                    {/* implementing the burger menu */}
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'navbar-menu active' : 'navbar-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                           <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li> 
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;