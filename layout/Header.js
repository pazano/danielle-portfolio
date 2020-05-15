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
  const menu = [
    {
      label: 'About',
      target: '/about',
      key: 'menu-about'
    },
  ];

  const emptyMenu = [];

  return(
    <div className="header">
      <Navigation
        menuItems={menu}
      />
      <Logo />
    </div>
  )
}

export default Header;