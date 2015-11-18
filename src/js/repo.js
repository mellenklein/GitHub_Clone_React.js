import React, { PropTypes } from 'react';
import jQuery from 'jquery';
import _ from 'lodash';
var moment = require('moment');
moment().format();

import $ from './token';

class Repo extends React.Component {
  render () {
    let date = this.props.repo.created_at;
    let momentTime = moment(date).fromNow();
    return (
      <article className="project">
        <header>
          <a href={this.props.repo.html_url}>{this.props.repo.name}</a>
        </header>
        <time className="time">Updated {momentTime}</time>
      </article>
    )
  }
}

Repo.defaultProps = {
  repo: {
    title: "",
    url: ""
  }
};


export default Repo;
