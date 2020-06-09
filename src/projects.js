import React, { Component } from 'react';
import { postsFetched } from "./config/actions/index";
import { connect } from "react-redux";
import Project from './Project';

let lastScrollY = 0;
let ticking = false;
export class Projects extends Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
    this.onLog = this.onLog.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
        data: ["1","2"],
        posts: [],
        posts2: []
      };
}

componentDidMount(){
  
//window.addEventListener('scroll', this.handleScroll);
}
componentDidUpdate(){
  console.log(this.props.posts);
 }
 componentWillUnmount() {
 // window.removeEventListener('scroll', this.handleScroll);
}


  
  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        //this.navRef.current.style.top = `${lastScrollY}px`;
        console.log(this.navRef.current.style);
        const styles = getComputedStyle(this.navRef.current)

        //console.log(styles) // rgb(0, 0, 0)
       
        ticking = false;
      });
   
      ticking = true;
    }
  };


 onLog(){
   console.log(this.props.posts);
 }
  render() {
      //wyśietlanie listy projektów
      var dane=this.props.posts;
      console.log(this.props.posts2);
      var div;
    if(this.props.posts2!= null){
      div =this.props.posts2.map(function(item, i){
        console.log({item});
        // return <li className="list-group-item list-group-item-action" key={i}><div className="row"><div className="col-md"></div><div className="col-md">{item.title}</div><div className="col-md">{item.text}</div></div></li>
        return <Project key={item.id}  title={item.title} text={item.text} color={item.color} />
      }, this)
    }else
    {
      return <li className="list-group-item list-group-item-action">Ładowanie..</li>
    }
      
      

      return (
        
<div>
{div}
          <ul className="list-group">
              
              
             
             
          </ul>
           <button onClick={this.onLog}>Log</button></div>
      )
  }
}

const mapStateToProps = (state) => {
  
  return {
    posts2: state.allposts.statPostState,
    posts: state.posts
  }
};
const mapDispatchToProps = { postsFetched };

export const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(Projects);