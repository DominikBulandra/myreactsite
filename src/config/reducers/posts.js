export const posts = (state = [], action) => { // (1)
    switch (action.type) { // (2)
      case 'FETCH_POSTS_SUCCESS':
        return [
          ...action.posts
        ]
        
      default:
        return state
    }
  }