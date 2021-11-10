import React, { Component } from 'react'


class Projects extends Component {
  render() {
    return (
      <div className={`projects ${this.props.projects ? '' : 'hidden'}`}>
        <a href="https://green-basket-app.herokuapp.com/">
          <div className="project-blob-1">
            <img className={'blob blob1'} src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636154135/Vector_btmrm2.png" alt="" />
            <div className="project-flex-GB">
              <img className={'project-image'} id='green-basket' src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636154337/Consumidor_-_consultar_restaurante_1_1_bypvg1.png" alt="" />
              <div className="project-text">
                <div className="GB">
                  <h2 className="project-title">GreenBasket</h2>
                  <p className="project-description">Concept Web app for establishments to sell leftovers at the end of the day.</p>
                </div>
              </div>
              <div className="icons-flex">
                <img src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636156908/js-logo_ovhjd2.png" alt="" className="JS" />
                <img src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636156908/html-css-logo_pp4q4n.png" alt="" className="html-css"/>
                <img src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636156909/rails-logo_qy7qdq.png" alt="" className="rails"/>
                <img src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636156908/maps-logo_pvszly.png" alt="" className="gmpaps" />
              </div>
            </div>
          </div>
        </a>
        <a href="https://watch-list-demo.herokuapp.com">
          <div className="project-blob-2">
            <img className={'blob blob2'} src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636154137/Vector_1_mm52hj.png" alt="" />
            <div className="project-flex-WL">
              <img className={'project-image'} src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636154342/image_2_j6rgjd.png" alt="" />
              <div className="project-text">
                <div className="WL">
                  <h2 className="project-title">Watchlist</h2>
                  <p className="project-description">Web app for saving favourite movies on watchlists and adding comments to each movie.</p>
                </div>
              </div>
              <div className="icons-flex-wl">
                <img src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636156908/js-logo_ovhjd2.png" alt="" className="JS" />
                <img src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636156908/html-css-logo_pp4q4n.png" alt="" className="html-css" />
                <img src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636156909/rails-logo_qy7qdq.png" alt="" className="rails" />
                <img src="https://res.cloudinary.com/dgoz8h895/image/upload/v1636157826/react-logo_uiqyat.png" alt="" className="react" />
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default Projects
