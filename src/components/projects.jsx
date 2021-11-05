import React, { Component } from 'react'


class Projects extends Component {

  render() {
    return (
      <div className={`row-flex ${this.props.projects ? '' : 'hidden'}`}>
        <p>project 1</p>
        <p>project 2</p>
      </div>
    )
  }
}

export default Projects
