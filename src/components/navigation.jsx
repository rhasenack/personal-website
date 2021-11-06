import React, { Component } from 'react'


class Navigation extends Component {

  toggleProjects = () => {
    this.props.toggleProjectsFunction();
  }

  toggleAboutMe = () => {
    this.props.toggleAboutMeFunction();
  }

  toggleHome = () => {
    this.props.toggleHomeFunction();
  }

  render() {
    return (
      <div className={`navigation-menu`}>
        <p className = {this.props.mainImageText ? 'fade' : ''} onClick={this.toggleHome}>home</p>
        <p className = {this.props.aboutme ? 'fade' : ''} onClick = {this.toggleAboutMe}>about me</p>
        <p className = {this.props.projects ? 'fade' : ''} onClick = {this.toggleProjects}>projects</p>
      </div>
    )
  }
}

export default Navigation
