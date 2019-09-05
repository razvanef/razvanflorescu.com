import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Menu extends React.Component {
  render() {
    const menu = this.props.data

    const menuBlock = (
      <ul className="menu__list">
        {menu.map(item => (
          <li className="menu__list-item" key={item.path}>
            <Link
              to={item.path}
              className="menu__list-item-link"
              activeClassName="menu__list-item-link menu__list-item-link--active"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li class="menu__list-item"><a class="menu__list-item-link" href="https:/graitor.tumblr.com/">jurnal</a></li>
      </ul>
    )

    return <nav className="menu">{menuBlock}</nav>
  }
}

export default Menu
