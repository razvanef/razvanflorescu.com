import React from 'react'
import './style.scss'
import '../../assets/fonts/fontello-771c82e0/css/fontello.css'

class Links extends React.Component {
  render() {
    const links = this.props.data

    return (
      <div className="links">
        <ul className="links__list">
          {links.map(link => {
            return link.url ? (<li className="links__list-item">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`icon-${link.name}`} />
              </a>
            </li>) : ''
          })}
        </ul>
      </div>
    )
  }
}

export default Links
