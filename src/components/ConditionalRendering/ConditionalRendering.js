import React, { Component } from 'react';
import './ConditionalRendering.css';


class ConditionalRendering extends Component {
  constructor(props){
    super(props);
    this.state = {
      showExample1: true,
      showExample2: false,
      showExample3: true,
      showMobileMenu1: false,
      showMobileMenu2: false,
      showMobileMenu3: false
    }

    this.toggleExample1 = this.toggleExample1.bind(this);
    this.toggleExample2 = this.toggleExample2.bind(this);
    this.toggleExample3 = this.toggleExample3.bind(this);
    this.toggleMobileMenu1 = this.toggleMobileMenu1.bind(this);
    this.toggleMobileMenu2 = this.toggleMobileMenu2.bind(this);
    this.toggleMobileMenu3 = this.toggleMobileMenu3.bind(this);
    this.closeMobileMenu1 = this.closeMobileMenu1.bind(this);
    this.closeMobileMenu2 = this.closeMobileMenu2.bind(this);
    this.closeMobileMenu3 = this.closeMobileMenu3.bind(this);
  }

  toggleExample1(){
    this.setState({
      showExample1: !this.state.showExample1
    })
  }

  toggleExample2(){
    this.setState({
      showExample2: !this.state.showExample2
    })
  }

  toggleExample3(){
    this.setState({
      showExample3: !this.state.showExample3
    })
  }

  toggleMobileMenu1(){
    this.setState({
      showMobileMenu1: !this.state.showMobileMenu1
    })
  }
  
  toggleMobileMenu2(){
    this.setState({
      showMobileMenu2: !this.state.showMobileMenu2
    })
  }
    
  toggleMobileMenu3(){
    this.setState({
      showMobileMenu3: !this.state.showMobileMenu3
    })
  }
  
  closeMobileMenu1(){
    this.setState({
      showMobileMenu1: false
    })
  }
  
  closeMobileMenu2(){
    this.setState({
      showMobileMenu2: false
    })
  }
  
  closeMobileMenu3(){
    this.setState({
      showMobileMenu3: false
    })
  }

  render() {

    let example1 = null;
    if (this.state.showExample1){
      example1 = <div className='example_box one'></div>
    }else{
      example1 = null;
    }

    let example2 = null;
    if (this.state.showExample2){
      example2 = <div className='example_box two'></div>
    }else{
      example2 = null;
    }

    let example3 = null;
    if (this.state.showExample3){
      example3 = <div className='example_box three'></div>
    }else{
      example3 = null;
    }

    let mm1Style, mm2Style, mm3Style;

    if (this.state.showMobileMenu1){
      mm1Style = {
        top: '1px',
        left: '7px'
      }
    }else{
      mm1Style = {
        top: '1px',
        left: '300px'
      }
    }
    
    if (this.state.showMobileMenu2){
      mm2Style = {
        top: '1px',
        left: '7px'
      }
    }else{
      mm2Style = {
        top: '-250px',
        left: '7px'
      }
    }
        
    if (this.state.showMobileMenu3){
      mm3Style = {
        opacity: 1
      }
    }else{
      mm3Style = {
        opacity: 0
      }
    }

    return (
      <section className="conditional_rendering">

        <section className='cr_header'>
          <h2>Conditional Rendering</h2>
          <p>Conditional rendering refers to an element of the page displaying differently based on some condition. Maybe the user clicks a button and you want some element to display differently. Or a different message is displayed for different users based on some criteria. Either way, it is something that is seen commonly on the web today and is an essential skill to have as a web developer.</p>
        </section>

        <section className='cr_example1'>
          <h2>Here is a simple example</h2>
          <div className='example_wrapper'>
            { example1 }
            { example2 }
            { example3 }
          </div>
          <button onClick={ this.toggleExample1 }>Blue Box</button>
          <button onClick={ this.toggleExample2 }>Red Box</button>
          <button onClick={ this.toggleExample3 }>Green Box</button>
        </section>

        <section className='cr_example2'>
          <h2>Mobile Menus</h2>
          <p>Mobile menus are a great example of when to use conditional rendering. When the user clicks on the menu icon, the menu should toggle, as well as closing the menu based on other actions, such as clicking on one of the items in the menu. While the items in these menus won't actually navigate elsewhere, feel free to click them to see the menu close!</p>
          <div className='example_wrapper2'>

            <button onClick={ this.toggleMobileMenu1 }>Slide left</button>
            <div className='phone'>
              <div className='phone_screen'>
                <ul className='cr_mobile_menu mobilemenu1' style={mm1Style}>
                  <li onClick={ this.closeMobileMenu1 }>Home</li>
                  <li onClick={ this.closeMobileMenu1 }>Conditional Rendering</li>
                  <li onClick={ this.closeMobileMenu1 }>Themes</li>
                  <li onClick={ this.closeMobileMenu1 }>Modals</li>
                  <li onClick={ this.closeMobileMenu1 }>Events</li>
                </ul>
              </div>
            </div>

            <button onClick={ this.toggleMobileMenu2 }>Slide down</button>
            <div className='phone'>
              <div className='phone_screen'>
                <ul className='cr_mobile_menu mobilemenu2' style={mm2Style}>
                  <li onClick={ this.closeMobileMenu2 }>Home</li>
                  <li onClick={ this.closeMobileMenu2 }>Conditional Rendering</li>
                  <li onClick={ this.closeMobileMenu2 }>Themes</li>
                  <li onClick={ this.closeMobileMenu2 }>Modals</li>
                  <li onClick={ this.closeMobileMenu2 }>Events</li>
                </ul>
              </div>
            </div>

            <button onClick={ this.toggleMobileMenu3 }>Appear</button>
            <div className='phone'>
              <div className='phone_screen'>
                <ul className='cr_mobile_menu mobilemenu3' style={mm3Style}>
                  <li onClick={ this.closeMobileMenu3 }>Home</li>
                  <li onClick={ this.closeMobileMenu3 }>Conditional Rendering</li>
                  <li onClick={ this.closeMobileMenu3 }>Themes</li>
                  <li onClick={ this.closeMobileMenu3 }>Modals</li>
                  <li onClick={ this.closeMobileMenu3 }>Events</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

      </section>
    );
  }
}


export default ConditionalRendering;