import React, { Component } from 'react';
import { postsFetched } from "./config/actions/index";
import { connect } from "react-redux";
import {fire  , base}  from './config/Fire';
import { uuid } from 'uuidv4';
export class Add extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
   
   // this.handleChange = this.handleChange.bind(this);
    this.state = {
        posts: {},
        currentUser: null,
        title: 'sss',
        text: '',
        color:''
      };
}
componentWillMount(){
  this.postsRef = base.syncState('posts',{
      context: this,
      state: 'posts'
  });

  
}
handleChangeTitle(e){
  e.preventDefault();

  const title = e.target.value;
  this.setState({title});


  console.log(this.state.title);

}
handleChangeText(e){
  e.preventDefault();
  const text = e.target.value;
 
  

  this.setState({text});
  console.log(e.target.value);
 

}
handleChangeColor(e){
  e.preventDefault();
  const color = e.target.value;
 
  

  this.setState({color});
  console.log(e.target.value);
 

}
add(e){
  e.preventDefault();
  const posts = {...this.state.posts};
  const id = uuid();
  const title = this.state.title;
  const text = this.state.text;
  const color = this.state.color;
  console.log(id);
  posts[id] = {
    id: id,
    title: title,
   text: text,
   color: color
   // owner: this.state.currentUser.uid
  };
  console.log( posts);
  
  this.setState({posts});
  var data={
      "title":title,
      "text":text
  };
  //fire.database().ref().child('posts').child('1').set(data);
  console.log(this.props.posts);
}
fileSelectedHandler= event => {
  console.log(event.target.files[0]);
}
componentDidUpdate(){
  console.log(this.props.posts);
 }
 
  render() {
      //wyśietlanie listy projektów
     
      

      return (
        <form>
        <div className="form-group">
         <label htmlFor="title">Tytuł</label>
         <input type="textarea"  value={this.state.title} onChange={this.handleChangeTitle.bind(this)} name="title" className="form-control" placeholder="Enter title" />
         <small id="emailHelp" className="form-text ">We'll never share your email with anyone else.</small>
        </div>
         <div className="form-group">
        <label htmlFor="exampleInputPassword1">treść</label>
        <input value={this.state.text} name="name" onChange={this.handleChangeText.bind(this)} type="textarea" className="form-control" id="exampleInputPassword1" placeholder="Text" />
      <input name="color" value={this.state.color} type="color" id="myColor" onChange={this.handleChangeColor.bind(this)} ></input>
      <input type="file" onChange={this.fileSelectedHandler}/>
        </div>
        <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
        <button onClick={this.add} style={{marginLeft: '25px'}} className="btn btn-success">dodaj{this.state.title}</button>
   </form>

      )
  }
}

const mapStateToProps = (state) => {
  
  return {
    
    posts: state.posts
  }
};
const mapDispatchToProps = { postsFetched };

export const AddContainer = connect(mapStateToProps, mapDispatchToProps)(Add);
