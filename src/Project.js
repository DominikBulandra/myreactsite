import React, { Component } from 'react';

let lastScrollY = 0;
let ticking = false;
class Project extends Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
    this.state = {
      email: '',
      password: ''
    };
  }
  componentDidMount(){
  
    window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
      lastScrollY = window.scrollY;
  
      if (!ticking) {
        window.requestAnimationFrame(() => {
          //this.navRef.current.style.top = `${lastScrollY}px`;
          console.log(this.navRef.current.style.top);
          const styles = getComputedStyle(this.navRef.current)
  
          //console.log(styles) // rgb(0, 0, 0)
         
          ticking = false;
        });
     
        ticking = true;
      }
    };  
  render() {
    const spanStyles = {
      color: "#fff",
      borderColor: "#00f"
    };
      let styles = {
        margin: '20px',
        width: '250px',
        height: '250px',
        backgroundColor: "yellow",
      };
    return (
        <div  ref={this.navRef} className="container" style={{backgroundColor: this.props.color,position: "relative",maxWidth: '100%'}}>
            <div className="row justify-content-md-center">
       <div className="col-md-12 " style={{height: 200}}>
       <h1>{this.props.title}</h1>
    <p style={{Color: 'lightblue'}}>{this.props.text}</p>
    
 </div>
 </div>
 </div>
    );
  }
}
export default Project;
