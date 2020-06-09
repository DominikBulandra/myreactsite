import {fire  , base}  from '../Fire';
const databaseRef = fire.database().ref();
// this is to get the stat-cards table from firebase
const statCardsRef = databaseRef.child("posts");

export const postsFetched = (posts) => ({
    type: 'FETCH_POSTS_SUCCESS',
    posts
  });
export const getAllStatPostsAction = () => async dispatch =>
{
  statCardsRef.on("value", snapshot => {
    dispatch({
      type: "getAllStatPosts",
      // if the json returns null, i.e. the
      // stat-cards table is blank - empty
      // then we'll return an empty object
      payload: snapshot.val() || {}
    });
  });
}
