import React, { PropTypes } from 'react';
import jQuery from 'jquery';
import _ from 'lodash';
var moment = require('moment');
moment().format();

import $ from './token';

class Sidebar extends React.Component { //new instance of List view
  constructor(props) {
    super(props);
  }
  render(){
    let date = this.props.profile.created_at;
    let newDate = new Date(date).toDateString;
    // let avatar = this.props.repo.owner.avatar_url
    return (
      <section className="sidebar">
        <img id="avatar"
          src={this.props.profile.avatar_url}/>
        <h1 id="name">{this.props.profile.name}</h1>
        <p id="username">{this.props.profile.login}</p>
      <div className="contact">
        <div className="contact1">
          <span className="octicon octicon-location"></span>
          <p id="location">{this.props.profile.location}</p>
        </div>
        <div className="contact2">
          <span className="octicon octicon-mail"></span>
          <a id="email"
            href={this.props.profile.email}>{this.props.profile.email}</a>
        </div>
        <div className="contact3">
          <span className="octicon octicon-link"></span>
          <a id="blog" href="">{this.props.profile.blog}</a>
        </div>
        <div className="contact4">
          <span className="octicon octicon-clock"></span>
          <p id="join">Joined on {newDate}</p>
        </div>
      </div>
      <div className="stats">
        <a href="#"><p id="followers">{this.props.profile.followers}</p><span>Followers</span></a>
        <a href="#"><p id="starred">{this.props.profile.public_gists}</p><span>Starred</span></a>
        <a href="#"><p id="following">{this.props.profile.following}</p><span>Following</span></a>
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
