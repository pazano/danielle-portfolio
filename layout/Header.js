import Navigation from './components/Navigation';
import Link from 'next/link';

import './Header.scss';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <h1>elle | rou <span>photography</span></h1>
    </Link>
  </div>
)

const Header = () => {
  const fakeMenu = [
    {
      label: 'Portfolio',
      target: '/portfolio',
      key: 'menu-portfolio'
    },
    {
      label: 'Blog',
      target: '/blog',
      key: 'menu-blog'
    },
    {
      label: 'About',
      target: '/about',
      key: 'menu-about'
    },
    {
      label: 'Contact',
      target: '/contact',
      key: 'menu-contact'
    },
  ];

  return(
    <div className="header">
      <Navigation
        menuItems={fakeMenu}
      />
      <Logo />
    </div>
  )
}

export default Header;