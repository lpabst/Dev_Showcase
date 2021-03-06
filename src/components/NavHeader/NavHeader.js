import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavHeader.css';


class NavHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMobileMenu: false,
      hideMobileMenu: false
    }

    this.adjustMenuForScreenSize = this.adjustMenuForScreenSize.bind(this);
    this.openMobileMenu = this.openMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
  }

  componentDidMount(){
    this.adjustMenuForScreenSize();
    window.addEventListener('resize', this.adjustMenuForScreenSize);
  }

  adjustMenuForScreenSize(){
    let screenWidth = window.innerWidth;
    if (screenWidth > 550){
      this.openMobileMenu();
    }else{
      this.closeMobileMenu();
    }
  }

  openMobileMenu(){
    this.setState({
      showMobileMenu: true
    })
  }

  closeMobileMenu(){
    this.setState({
      showMobileMenu: false
    })
  }

  render() {

    let hamStyle = null;
    let menuStyle = null;
    if (this.state.showMobileMenu){
      hamStyle = {'top': '-120px'}
      menuStyle = {'right': '0px'}
    }else{
      hamStyle = {'top': '15px'}
      menuStyle = {'right': '-950px'}     
    }

    return (
      <section className="nav_header">

        <div className='ham' onClick={ this.openMobileMenu } style={hamStyle}>...</div>

        <ul className='nav_list' id='nav_list' style={menuStyle}>
            <p onClick={ this.closeMobileMenu }>X</p>
            <Link to='/'>Home</Link>
            <Link to='/conditional-rendering'>Conditional Rendering</Link>
            <Link to='/themes'>Themes</Link>
            <Link to='/modals'>Modals</Link>
            <Link to='/events'>Events</Link>
        </ul>

      </section>
    );
  }
}


export default NavHeader;