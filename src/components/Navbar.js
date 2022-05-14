import logo from '../images/logo.svg';
export default function Navbar() {
    return (
        <nav className='nav-container'>
            <img src={logo} alt="app logo" className='logo'></img>

            <h4 className='nav-title'>React Course - Project 1</h4>

        </nav>
    )
}