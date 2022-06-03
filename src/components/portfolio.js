/* eslint-disable react/prefer-stateless-function */
// eslint-disable-next-line max-classes-per-file
import React from 'react';
import './portfolio.css';
import header from './img/Topper.png';
import labs1 from './img/img1.png';
import labs2 from './img/img2.png';
import labs3 from './img/img3.png';
import labs4 from './img/img4.png';
import labs5 from './img/img5.png';
import logo from './img/Picture.jpg';
// eslint-disable-next-line react/prefer-stateless-function
class DiscordSite extends React.Component {
  render() {
    return (
      <div className="mainpanel">
        <div className="panel1">
          <div className="panel0">
            <a href="index.html">
              <img className="logoImage" src={logo} alt="" />
            </a>
            <div className="linksDiv">
              <a className="linksDiscord" href="https://github.com/alejandroav93">GitHub</a>
              <a className="linksDiscord" href="https://www.linkedin.com/in/alejandroalvarezvidal/">LinkedIn</a>
              <a className="linksDiscord" href="https://linktr.ee/alejandroav93">Social</a>
              <a className="linksDiscord" href="mailto:alv12429@uvg.edu.gt">Mail</a>
              <a className="linksDiscord" href="https://discord.com/users/El%20Trooper#7122">Discord</a>
              <a className="linksDiscord" href="http://54.210.69.168:3169/">Last Proyect</a>
            </div>
          </div>
          <h1 className="subText1">Alejandro Alvarez</h1>
          <h2 className="subText3">Portfolio</h2>
          <img className="panel1img" src={header} alt="" />
          <div className="subPanel1" />
          <div className="subPanel3">
            <button type="button" className="btn2">
              <a className="link" href="mailto:alv12429@uvg.edu.gt">Contact</a>
            </button>
          </div>
        </div>
        <div className="panel2">
          <div className="panel4">
            <h2 className="subText4">
              My Projects related to Web Development
            </h2>
            <h4 className="subText5">
              These projects go anywhere from basic HTML,
              CSS and node.JS coding to React JS + Webpack
              development using Linters and Babel.
            </h4>
          </div>
          <div className="panel5">
            <a className="links1" href="http://54.210.69.168:3161/">
              <img className="lab1" src={labs1} alt="" />
            </a>
            <a className="links1" href="http://54.210.69.168:3162/">
              <img className="lab1" src={labs2} alt="" />
            </a>
            <a className="links1" href="http://54.210.69.168:3164/">
              <img className="lab1" src={labs3} alt="" />
            </a>
            <a className="links1" href="http://54.210.69.168:3169/">
              <img className="lab1" src={labs4} alt="" />
            </a>
          </div>
          <div className="panel5">
            <a className="links1" href="http://54.210.69.168:3166/">
              <img className="lab1" src={labs5} alt="" />
            </a>
          </div>
        </div>
      </div>

    );
  }
}

export default DiscordSite;
