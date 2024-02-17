import './navbar.scss';
import Sidebar from '../sidebar/Sidebar'



const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
        <div className='wrapper'>
            <span>MyPortfolio</span>
            <div className="social">
                <a href="https://instagram.com/egabagus_putra24"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/facebook.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar