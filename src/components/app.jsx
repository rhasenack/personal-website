import React, { Component } from 'react'
import MainImage from './main_image'
import Projects from './projects'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImage: true,
      projects: false
    };

    this.toggleProjects = this.toggleProjects.bind(this);
  }

  toggleProjects = () => {
    this.setState({
      mainImage: false,
      projects: true
    });
  }

  render() {
    return (
      <div className="container">
        <MainImage mainImage={this.state.mainImage} toggleProjectsFunction={this.toggleProjects} />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App
