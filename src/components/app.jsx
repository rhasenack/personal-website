import React, { Component } from 'react'
import MainImage from './main_image'
import Projects from './projects'
import AboutMe from './about_me'
import Navigation from './navigation'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImage: true,
      mainImageSize: 'big',
      mainImageText: true,
      projects: false,
      aboutme: false
    };

    this.toggleProjects = this.toggleProjects.bind(this);
  }

  toggleProjects = () => {
    this.setState({
      mainImage: false,
      mainImageText: false,
      projects: true,
      aboutme: false
    });
  }

  toggleAboutMe = () => {
    this.setState({
      mainImage: true,
      mainImageSize: 'small',
      mainImageText: false,
      projects: false,
      aboutme: true
    });
  }

  toggleHome = () => {
    this.setState({
      mainImage: true,
      mainImageSize: 'big',
      mainImageText: true,
      projects: false,
      aboutme: false
    });
  }
  render() {
    return (
      <div className="container">
        <MainImage mainImage={this.state.mainImage} mainImageSize={this.state.mainImageSize} mainImageText={this.state.mainImageText}/>
        <Projects projects={this.state.projects}/>
        <AboutMe aboutme={this.state.aboutme} />
        <Navigation toggleProjectsFunction={this.toggleProjects} toggleAboutMeFunction={this.toggleAboutMe} toggleHomeFunction={this.toggleHome}
          aboutme={this.state.aboutme} projects={this.state.projects} mainImageText={this.state.mainImageText}/>
      </div>
    );
  }
}

export default App
