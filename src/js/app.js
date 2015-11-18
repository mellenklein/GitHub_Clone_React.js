import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import Header from './header';
import RepoList from './repo_list';
import Counter from './counter';

class App extends React.Component {
  constructor(props) {
    //do all the stuff that our react.component's constrcutor would normally do
    super(props);

    //once we are done with that.. lets do our own stuff
    this.state = {
      repos: []  //initial state: an empty array
    }
  }
  componentDidMount() {
    this.getRepos();

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
          })
  }

  render () {
    return (
      <main>
        <Header />
        <RepoList repos={this.state.repos}/>
        <Counter />
      </main>
    )
  }
}


ReactDOM.render(  //actually renders onto page
  <App/>,
  document.getElementById('app')
);

export default App;
