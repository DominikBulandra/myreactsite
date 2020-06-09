import React, { Component } from 'react';
import { postsFetched } from "./config/actions/index";
import { connect } from "react-redux";
import {
  Link
} from 'react-router-dom';
export class List extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
        data: ["1","2"],
        posts: ["1","2"]
      };
}
componentDidMount(){
  var results = this.props.posts;
            var data = [], item;
            for (var i = 0, len = results.length; i < len; i++) {
                item = results[i];
                data.push({id: item.id, title: item.title});
            }
            //console.log(this.props.posts);
            var data2 = this.props.data;
            this.setState({data2});
}
  render() {
      //works for array
      var dane=this.props.posts;
      console.log(this.props.posts2);
      
      if(this.props.posts2!= null){
      var li =this.props.posts2.map(function(item, i){
        console.log({item});
        return <li className="list-group-item list-group-item-action" key={i}  style={{backgroundColor: item.color}}><div className="row"><div className="col-md"> <Link to={{ pathname: '../admin/edit', title: item.title, text: item.text,color: item.color, id:item.id  }}>Edytuj</Link></div><div className="col-md">{item.title}</div><div className="col-md">{item.text}</div></div></li>
      })
    }
      //doesn't work for array of objects
      

      return (
        

          <ul className="list-group">
              
              {li}
             
             
          </ul>
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

export const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);