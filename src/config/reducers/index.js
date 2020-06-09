import { combineReducers, applyMiddleware } from "redux";
import { posts } from "./posts";
import { allposts } from "./allposts";


export default combineReducers({
  posts,allposts
});