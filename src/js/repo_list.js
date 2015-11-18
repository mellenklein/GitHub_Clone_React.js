import React from 'react'
import Repo from './repo'
// import jQuery from 'jquery'

class RepoList extends React.Component { //new instance of List view
  constructor(props) {
    super(props);

    this.state = {
      repos: [] //create an empty array to store the repos
    }
  }


  render(){
    //return content of each repo
    let repos = this.props.repos.map(repo => {
      return <Repo/>
    });
    return (
      <section className="projects">
        Here's a repo! {repos}
      </section>
    )
  }
}


export default RepoList;
