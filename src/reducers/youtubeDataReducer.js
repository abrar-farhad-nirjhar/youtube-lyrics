


let initialState = {
    youtube:""
}
const getDataReducer=(state=initialState, action)=>{

    switch(action.type){
      case "GETDATA":

        
          
        return {youtube:action.payload}
       default:
           return state
    }
  
  }

export default getDataReducer