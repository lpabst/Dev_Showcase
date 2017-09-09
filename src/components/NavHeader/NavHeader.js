import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavHeader.css';


class NavHeader extends Component {

  render() {
    return (
      <div className="nav_header">

        <ul className='nav_list'>
            <Link to='/'>Home</Link>
            <Link to='/conditional-rendering'>Conditional Rendering</Link>
            <Link to='/themes'>Themes</Link>
            <Link to='/modals'>Modals</Link>
            <Link to='/events'>Events</Link>
        </ul>

      </div>
    );
  }
}


export default NavHeader;