import React, { PropTypes } from 'react';
import jQuery from 'jquery';
import _ from 'lodash';

import $ from './token';

class Sidebar extends React.Component { //new instance of List view
  constructor(props) {
    super(props);
  }
  render(){
    // let avatar = this.props.repo.owner.avatar_url
    return (
      <section className="sidebar">
        <img id="avatar"
          src={this.props.profile.avatar_url}/>
        <h1 id="name">Name</h1>
        <p id="username">Username</p>
      <div className="contact">
        <div className="contact1">
          <span className="octicon octicon-location"></span>
          <p id="location"></p>
        </div>
        <div className="contact2">
          <span className="octicon octicon-mail"></span>
          <a id="email" href=""></a>
        </div>
        <div className="contact3">
          <span className="octicon octicon-link"></span>
          <a id="blog" href=""></a>
        </div>
        <div className="contact4">
          <span className="octicon octicon-clock"></span>
          <p id="join">Joined on</p>
        </div>
      </div>
      <div className="stats">
        <a href="#"><p id="followers"></p><span>Followers</span></a>
        <a href="#"><p id="starred"></p><span>Starred</span></a>
        <a href="#"><p id="following"></p><span>Following</span></a>
      </div>
      <div className="orgs">
        <h3>Organizations</h3>
        <a href="#"><img src="https://avatars2.githubusercontent.com/u/5890317?v=3&s=84" alt="Nashville Women Programmers"/></a>
        <a href="#"><img src="https://avatars2.githubusercontent.com/u/12956562?v=3&s=84" alt="The Iron Yard Nashville" /></a>
      </div>
      </section>
    )
  }
}

Sidebar.defaultProps = {
  sidebar: {
    title: "",
    url: ""
  }
};

export default Sidebar;
