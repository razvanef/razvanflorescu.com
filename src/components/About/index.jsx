import React from 'react'
import '../../assets/scss/init.scss'
import './style.scss'

class About extends React.Component {
  render() {
    const page = this.props.data.markdownRemark

    return (
      <div className="content__inner">
        <div className="about"
          dangerouslySetInnerHTML={{ __html: page.html }}
        ></div>
      </div>
    )
  }
}

export default About