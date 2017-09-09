import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavHeader.css';


class NavHeader extends Component {

  render() {
    return (
      <div className="nav_header">

        <ul className='nav_list'>
            <Link to='/conditional-rendering'>Conditional Rendering</Link>
        </ul>

      </div>
    );
  }
}


export default NavHeader;