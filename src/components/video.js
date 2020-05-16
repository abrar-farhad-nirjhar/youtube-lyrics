import React from 'react'
import { connect } from 'react-redux'

function Video(props) {

  
    
    let display = ""

    
        
        if(props.videoId.length>0){
                 display = <iframe style={{width:"100%"}}  height="350" title="video"
        src={"https://www.youtube.com/embed/"+props.videoId}>
        </iframe>
        }
        


    return (
        <div>
            {display}
        </div>
    )
}


const mapStateToProps = (state) => ({
    videoId: state.videoId.videoID
})

export default connect(mapStateToProps)(Video)

