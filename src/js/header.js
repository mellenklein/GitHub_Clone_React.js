import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <span className="mega-octicon octicon-mark-github"></span>
        <input type="text" name="name" value="" placeholder="Search GitHub"/>
        <nav className="navMain">
          <a href="">Pull requests</a>
          <a href="">Issues</a>
          <a href="">Gist</a>
        </nav>
        <nav className="navNotif">
          <a className="octicon octicon-bell" href=""></a>
          <span className="octicon octicon-plus" id="plus">
            <a href="#" className="octicon octicon-triangle-down"></a>
            <div className="dropdown" id="new">
              <ul className="menu">
                <a className="menu-item" href="">New repository</a>
                <a className="menu-item" href="">New organization</a>
              </ul>
            </div>
          </span>
          <img id="avatar-small" src="" alt="avatar"/><a href="#" className="octicon octicon-triangle-down"></a>
        </nav>
      </header>
    )
  }
}

export default Header;
