import React, { Component } from 'react'


class AboutMe extends Component {

  render() {
    return (
      <div>
        <div className={`about-me ${this.props.aboutme ? '' : 'hidden'}`}>
          <p>
            I’m a
            <strong> Mechanical Engineer</strong>
            , with experience  as an
            <strong> industrial software consultant </strong>
             and
            <strong> project manager</strong>.
          </p>
          <p>
            I currently study
            <strong> innovation </strong>
            at Universidade do Porto and am focusing on building a cuple of apps with
            <strong> Rails and React</strong>
            .
          </p>
          <p>In my free time, I love playing and producing
            <strong> music </strong>
            , as well as playing football and Ultimate Frisbee!
            You can check two of my singles in <strong><a id="soundcloud-link"href="https://soundcloud.com/ricardo-hasenack">SoundCloud</a></strong>.</p>
        </div>
      </div>
    )
  }
}

export default AboutMe
