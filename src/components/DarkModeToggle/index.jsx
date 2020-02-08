import React from 'react'

class DarkModeToggle extends React.Component {
  render() {
      const theme = this.props.theme.name

    return (
      <div className="dark-mode--toggle" onClick={this.props.onClick}>
        { theme === 'light-mode' ?
            <span className="icon-sun"></span> :
            <span className="icon-moon-inv"></span>
        }
      </div>
    )
  }
}

export default DarkModeToggle
