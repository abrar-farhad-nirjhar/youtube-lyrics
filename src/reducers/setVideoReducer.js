


let initialState = {
    videoID:""
} 



const setVideoReducer=(state=initialState, action)=>{

    switch(action.type){
      case "SET_VIDEO":
          
          return {videoID:action.payload}
        
       default:
           return state
    }
  
  }

export default setVideoReducer