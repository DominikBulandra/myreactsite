import React, { Component } from 'react';
import { postsFetched } from "./config/actions/index";
import { connect } from "react-redux";
import {fire  , base, firestore}  from './config/Fire';

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
   
   // this.handleChange = this.handleChange.bind(this);
    this.state = {
      file:'',
      imagePreviewUrl: '',
        posts: {},
        currentUser: null,
        title: this.props.location.title,
        text: this.props.location.text,
        color:  this.props.location.color
      };
}
componentWillMount(){
  this.postsRef = base.syncState('posts',{
      context: this,
      state: 'posts'
  });
  
  
}
componentDidMount(){
 

}
onprops(){
  if (this.props.location.title!=this.state.title){
  const title=this.props.location.title;
  const text=this.props.location.text;
  const color=this.props.location.color;
  this.setState({ title: title});
  this.setState({ text: text});
  this.setState({ color: color});
  console.log(this.state.title);
  }
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
update(e){
  e.preventDefault();
  const id = this.state.id;
  const title = this.state.title;
  const text = this.state.text;
  const color = this.state.color;
  //let userRef = this.firestore.ref('posts/' + this.props.location.id);
  const databaseRef = fire.database().ref('posts/'+this.props.location.id);
// this is to get the stat-cards table from firebase
const statCardsRef = databaseRef.update({
  
  title: title,
  text: text,
  color: color
}).then[()=> {
  console.log('updated!');
}];
 console.log(statCardsRef);

  // firestore.Collection('posts').oc(this.props.location.id).update({
  //   title: title,
  //   text: text,
  //   color: color
  // })
  
 
  //fire.database().ref().child('posts').child('1').set(data);
  console.log(this.props.posts);
}
componentDidUpdate(){
  console.log(this.props.posts);
  this.onprops();
 }
 _handleImageChange(e){
  e.preventDefault();

  let reader = new FileReader();
  let file = e.target.files[0];

  reader.onloadend = () => {
    this.setState({
      file: file,
      imagePreviewUrl: reader.result
    });
  }

  reader.readAsDataURL(file)

 };
  render() {
      //wyśietlanie listy projektów
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
      console.log(this.props.location.title);
     
      return (<div>
        <h1>Edytuj</h1>
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
        </div>
        <div className="form-group">
        <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
            </div>
        <button type="submit" onClick={this.login} className="btn btn-primary">Usuń</button>
        <div className="imgPreview">
          {$imagePreview}
        </div>
        <button onClick={this.update} style={{marginLeft: '25px'}} className="btn btn-success">Zmień</button>
   </form>
   </div>
      )
  }
}

const mapStateToProps = (state) => {
  
  return {
    
    posts: state.posts
  }
};
const mapDispatchToProps = { postsFetched };

export const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit);