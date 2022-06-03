/* eslint-disable react/prefer-stateless-function */
// eslint-disable-next-line max-classes-per-file
import React from 'react';
import './discordSite.css';
import header from './img/Topper.png';

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
          <div className="panel3">

          </div>
          <div className="panel4">
            <h2 className="subText4">
                Create an
                invite-only
                place where you
                belong
            </h2>
            <h4 className="subText5">
              Discord servers are organized into topic-based channels where you can collaborate,
              share, and just talk about your day without clogging up a group chat.
            </h4>
          </div>
        </div>
      </div>

    );
  }
}

export default DiscordSite;
