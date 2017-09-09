import React, { Component } from 'react';
import './ConditionalRendering.css';


class ConditionalRendering extends Component {
  constructor(props){
    super(props);
    this.state = {
      showExample1: false,
      showExample2: false,
      showExample3: false
    }

    this.toggleExample1 = this.toggleExample1.bind(this);
    this.toggleExample2 = this.toggleExample2.bind(this);
    this.toggleExample3 = this.toggleExample3.bind(this);
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

    return (
      <section className="conditional_rendering">

        <section className='cr_header'>
          <h2>Conditional Rendering</h2>
          <p>Conditional rendering refers to an element of the page displaying differently based on some condition. Maybe the user clicks a button and you want some element to display differently. Or a different message is displayed for different users based on some criteria. Either way, it is something that is seen commonly on the web today and is an essential skill to have as a web developer.</p>
        </section>

        <section className='cr_example1'>
          <div className='example_wrapper'>
            { example1 }
            { example2 }
            { example3 }
          </div>
          <button onClick={ this.toggleExample1 }>Blue Box</button>
          <button onClick={ this.toggleExample2 }>Red Box</button>
          <button onClick={ this.toggleExample3 }>Green Box</button>
        </section>

      </section>
    );
  }
}


export default ConditionalRendering;