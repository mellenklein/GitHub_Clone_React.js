import React, { PropTypes } from 'react';
import jQuery from 'jquery';

class Repo extends React.Component {
  render () {
    return (
      <article className="project">
        <header>
          <a href="">Project Name</a>
        </header>
        <time className="time">Updated today</time>
      </article>
    )
  }
}

Repo
export default Repo;
