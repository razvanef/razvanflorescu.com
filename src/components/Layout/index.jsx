import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'
import DarkModeToggle from '../DarkModeToggle'
import { ThemeContext } from '../../context/ThemeContext'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ThemeContext.Consumer>
        {theme => (
        <div className="layout">
          <Helmet
            bodyAttributes={{
              class: theme.name
            }} />
          <DarkModeToggle theme={theme}
            onClick={() =>
              theme.updateTheme(theme.name === "light-mode" ? "dark-mode" : "light-mode")
            } />
          {children}
        </div>
        )}
      </ThemeContext.Consumer>
      
    )
  }
}

export default Layout
