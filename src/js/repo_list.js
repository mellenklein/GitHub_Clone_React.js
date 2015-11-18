import React from 'react'
import jQuery from 'jquery';
var moment = require('moment');
moment().format();

import Repo from './repo'
import $ from './token';

class RepoList extends React.Component { //new instance of List view
  constructor(props) {
    super(props);
  }


  render(){
    //return content of each repo
    let repos = this.props.repos.map(repo => {
      return <Repo key={repo.id}
                   repo={repo}/>
    });
    return (
      <section className="projects">
        {repos}
      </section>
    )
  }
}


export default RepoList;
