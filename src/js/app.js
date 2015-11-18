import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import _ from 'lodash';
var moment = require('moment');
moment().format();

import $ from './token';
import Header from './header';
import Sidebar from './sidebar';
import RepoList from './repo_list';
import Counter from './counter';

class App extends React.Component {
  constructor(props) {
    //do all the stuff that our react.component's constrcutor would normally do
    super(props);

    //once we are done with that.. lets do our own stuff
    this.state = {
      hasLoaded: false,
      profile: {},
      repos: []  //initial state: an empty array
    };
  }
  componentDidMount() {
    this.getRepos();
    this.getProfile();

    // setInterval(() => {
    //   this.getRepos();
    // }, 3000);
  }

  getRepos() {
    jQuery.ajax('https://api.github.com/users/mellenklein/repos')
          .then( response => {
            this.setState({
              hasLoaded: true,
              repos: response
            });
          });
  }
  getProfile() {
    jQuery.ajax('https://api.github.com/users/mellenklein')
          .then( response => {
            this.setState({
              hasLoaded: true,
              profile: response
            });
          });
  }

  render () {
    return (
      <div className="wrapper">
        <Header />
      <main>
        <Sidebar profile={this.state.profile}/>
        <RepoList repos={this.state.repos}
                  hasLoaded={this.state.hasLoaded}/>
      </main>
      </div>
    )
  }
}


ReactDOM.render(  //actually renders onto page
  <App/>,
  document.getElementById('app')
);

export default App;
