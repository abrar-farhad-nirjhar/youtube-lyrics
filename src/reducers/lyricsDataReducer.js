


let initialState = {
    lyrics:""
} 



const getDataReducer=(state=initialState, action)=>{

    switch(action.type){
      case "GETLYRICS":
          
          return {lyrics:action.payload}
        
       default:
           return state
    }
  
  }

export default getDataReducer