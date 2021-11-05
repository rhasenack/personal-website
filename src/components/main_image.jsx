import React, { Component } from 'react'


class MainImage extends Component {

  toggleProjects = () => {
    this.props.toggleProjectsFunction();
  }

  render() {
    return (
      <div>
        <div className={`main-image ${(this.props.mainImage ? '' : 'fade')}`}>
          <img src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636109073/Group_1_aerqki.png" alt="" />
          <div className="presentation-text">
            <p className="main-text">Hello, I'm</p>
            <p className="name"><strong>Ricardo</strong></p>
            <p>a FS web developer</p>
          </div>
          <p className="text-center" onClick={this.toggleProjects}>
            check my projects
          </p>
        </div>
      </div>
    )
  }
}

export default MainImage
