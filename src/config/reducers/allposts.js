export const allposts = (state = {}, action) => { // (1)
    switch (action.type) { // (2)
       case "getAllStatPosts":
          console.log("getting ", action.payload);
          console.log(action.payload);
          return {
            // keep the old state
            ...state,
           
            // add all the cards from the database
            // they will come in a json format,
            // so we need to convert them to array
            statPostState: Object.values(action.payload)
          };
      default:
        return state
    }
  }