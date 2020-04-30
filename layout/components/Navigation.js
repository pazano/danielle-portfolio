import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import './Navigation.scss';

const NavigationItem = ({ label, target }) => {
  return (
    <div className="navigation__menu-item">
      <Link href={target}>
        <a>{label}</a>
      </Link>
    </div>
  )
}

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
      menu: this.props.menuItems,
    }
    this.toggleMobile = this.toggleMobile.bind(this);
  }

  toggleMobile(e) {
    e.preventDefault();
    this.setState({
      mobileMenu: !this.state.mobileMenu,
    }, () => this.state.mobileMenu ? console.log('on') : console.log('off'))
  }

  render() {
    return (
      <div className="navigation">
        <div className={`navigation__mobile-menu`} onClick={(e) => this.toggleMobile(e)}>
          { this.state.mobileMenu ?
            <FontAwesomeIcon icon={faTimes} size="lg" />
            :
            <FontAwesomeIcon icon={faBars} size="lg" />
          }
        </div>
        <div className={`navigation__menu ${this.state.mobileMenu ? 'mobile-on' : 'mobile-off'}`}>
          {this.state.menu.map(item => (
            <NavigationItem
              label={item.label}
              target={item.target}
              key={item.key}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Navigation;