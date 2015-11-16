import React, { PropTypes } from 'react'
import Repo from './repo'
import jQuery from 'jquery'

class RepoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    //make ajax request
  }

  render(){
    //return content of each repo
  }
}




export default RepoList;
