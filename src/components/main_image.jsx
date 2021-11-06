import React, { Component } from 'react'
import Navigation from './navigation'

class MainImage extends Component {


  render() {
    return (
      <div>
        <div className={`main-image ${(this.props.mainImage ? '' : 'fade')}`}>
          <img className={ this.props.mainImageSize }src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636109073/Group_1_aerqki.png" alt="" />
          <div className={`presentation-text ${(this.props.mainImageText ? '' : 'fade')}`}>
            <p className="main-text">Hello, I'm</p>
            <p className="name"><strong>Ricardo</strong></p>
            <p>a full-stack developer based in Portugal</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MainImage
